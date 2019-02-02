import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import * as api from '../api'
import Serializable from '../errors/Serializable'
import { now } from '../helpers'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'
import Composer from './Composer'

const { optional } = Composer

let updateId = 0

@provide(TYPES.Updates)
export default class Updates extends Composer<ag.UpdateContext> implements ag.Updates {
  public static middlewareFilter (ctx: ag.Context) {
    return ctx.updates
  }

  public delay: number = 1000

  private client: ag.Client

  private readonly inProgress: { [key: string]: number } = {}

  private pendingUpdates: Array<() => Promise<any>> = []

  private readonly promises: { [key: string]: Promise<any> } = {}

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger,
    @inject(TYPES.Chats) public chats: ag.Chats,
    @inject(TYPES.UpdatesState) public updatesState: ag.UpdatesState,
    @inject(TYPES.UpdatesContextManager) private contextManager: ag.UpdatesContextManager,
    @inject(TYPES.UpdatesHandlerFactory) private createUpdatesHandler: (
      updates: ag.Updates,
      ctx: ag.Context,
      complete: (update: api.UpdateUnion) => any
    ) => ag.UpdatesHandler
  ) {
    super()
  }

  public configure (client: ag.Client) {
    this.client = client
    this.chats.configure(this.client)
    this.updatesState.configure(this.client)
  }

  public getChannelDifference (chat: ag.Chat): Promise<api.UpdatesChannelDifferenceUnion> {
    const key = `chat${chat.id}`

    if (this.promises[key]) {
      this.inProgress[key] = (this.inProgress[key] || 0) + 1
      if (this.inProgress[key] > 1) {
        this.logger.debug(() =>
          `getChannelDifference() "${chat.id}" recursion has detected, depth: ${this.inProgress[0]}`)
      }
      return this.promises[key]
    }

    this.promises[key] = chat.get().then((chatDoc) => this.client.updates.getChannelDifference(
      {
        channel: { _: 'inputChannel', access_hash: chatDoc.accessHash || '0', channel_id: chat.id },
        filter: { _: 'channelMessagesFilterEmpty' },
        flags: 0,
        limit: 30,
        pts: chatDoc.pts || 1
      },
      { timeout: 0x7fffffff }
    ))
      .finally(() => {
        setTimeout(() => {
          delete this.inProgress[key]
          delete this.promises[key]
        }, this.delay)
      })

    return this.promises[key]
  }

  public getDifference (): Promise<api.UpdatesDifferenceUnion> {
    if (this.promises.difference) {
      this.inProgress.difference = (this.inProgress.difference || 0) + 1
      if (this.inProgress.difference > 1) {
        this.logger.debug(() => `getDifference() recursion has detected, depth: ${this.inProgress[0]}`)
      }
      return this.promises.difference
    }

    this.promises.difference = this.getState()
      .then(async ({ pts, qts, date }) => this.client.updates.getDifference({ pts, date, qts: qts || -1, flags: 0 }))
      // .catch((error) => this.handleError(error, { _: 'updates.getState' }))
      .finally(() => {
        setTimeout(() => {
          delete this.inProgress.difference
          delete this.promises.difference
        }, this.delay)
      })
    return this.promises.difference
  }

  public middleware () {
    const handlerId = ++updateId

    const handler = async (ctx: ag.Context, next) => {
      const complete = (update: ag.UpdatesResponse, parent?: ag.UpdatesResponse): Promise<any> => {
        // this.logger.debug(`[${handlerId}] Complete "${update._}"`)
        return super.middleware()(this.contextManager.createContext({ ctx, parent, update }))
      }

      // if (ctx.request) {
      //   await next()
      //   if (!ctx.response) {
      //     throw new Error(`middleware() updates couldn't be handled ` +
      //       `because some of the middleware callbacks does not return a promise.`)
      //   }
      // }

      const rootUpdate = ctx.updates // || ctx.response

      if (rootUpdate) {
        const handleFn: () => Promise<any> = () => this.getState()
          .then(async () => {
            const time = now()
            const timer = setTimeout(() => {
              this.logger.warn(`[${handlerId}] processing is too long ${new Serializable(ctx.updates)}`)
              // throw new Error('Too long handled...')
            }, 30000)
            this.logger.verbose(`[${handlerId}] start to handle "${ctx._}"`)
            return this.createUpdatesHandler(this, ctx, complete).handle(rootUpdate)
              .then(() => {
                this.logger.verbose(`[${handlerId}] handled "${ctx._}" for ${((now() - time) / 1000)}sec`)
              }).finally(() => {
                clearTimeout(timer)
              })
          })
          .catch((error) => {
            try {
              this.client.handleError(error, ctx)
            } catch (e) {
              // already handled
            }
          })
          .finally(() => {
            this.pendingUpdates.shift()
            if (this.pendingUpdates.length) {
              return this.pendingUpdates[0]()
            }
          })

        this.pendingUpdates.push(handleFn)

        if (this.pendingUpdates.length === 1) {
          return handleFn()
        }
      }
    }
    return optional(async (ctx: ag.Context) => Updates.middlewareFilter(ctx), handler)
  }

  public startPolling (): Promise<any> {
    return this.client.startPolling().then(() => this.getDifference())
  }

  public stop (): Promise<void> {
    return this.client.stop()
  }

  protected async getState (): Promise<{ pts, qts, seq, date }> {
    const currentState = await this.updatesState.get()
    if (currentState.pts) {
      return currentState
    }
    if (!this.promises.state) {
      this.promises.state = this.client.updates.getState()
        .then(async (state: api.UpdatesStateUnion) => {
          const { pts, qts, seq, date } = state
          await this.updatesState.set({ pts, qts, seq, date })
          return state
        })
        .finally(() => {
          delete this.promises.state
        })
    }
    return this.promises.state
  }
}
