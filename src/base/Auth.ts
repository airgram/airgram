import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import * as api from '../api'
import RpcError from '../errors/RpcError'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'
import Composer from './Composer'

const { optional, compose } = Composer

export const DIALOGS = {
  code: 'code',
  continue: 'continue',
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
  samePhoneNumber: 'samePhoneNumber'
}

@provide(TYPES.Auth)
export default class Auth<ContextT = ag.AuthContext> extends Composer implements ag.Auth<ContextT> {
  protected static middlewareFilter (ctx: ag.Context) {
    return ctx.request && ![
      'auth.signIn',
      'auth.signUp',
      'auth.sendCode',
      'auth.resendCode'
    ].includes(ctx.request.method)
  }

  public client: ag.Client
  public maxAttempts: number = 3
  public storeKey: string = 'userAuth'
  private attempt: number = 0
  private invalidPhoneNumbers: Set<string> = new Set()
  private locked: boolean = false
  private state: ag.AuthDoc

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger,
    @inject(TYPES.AuthStore) protected store: ag.Store<ag.AuthDoc>
  ) {
    super()
  }

  public checkCode (code: string): Promise<api.AuthAuthorizationUnion> {
    if (!code) {
      throw new Error(`checkCode() code does not specified`)
    }
    this.attempt += 1
    return this.getState()
      .then(({ isRegistered, phoneNumber }: ag.AuthDoc): Promise<api.AuthAuthorizationUnion> => {
        return (isRegistered ? this.signIn(code) : this.signUp(code))
          .then(async (authorization: api.AuthAuthorizationUnion) => {
            if (authorization.user._ === 'userEmpty') {
              throw new Error('User is empty')
            }
            await this.set({
              phoneNumber,
              userId: authorization.user.id
            }, true)
            return authorization
          })
      }).catch(async (error) => {
        if (error instanceof RpcError
          && ((error.type === 'PHONE_CODE_INVALID' && this.attempt < this.maxAttempts)
            || error.type === 'AUTH_RESTART')
        ) {
          this.logger.verbose(`checkCode() "${error.type}" ${this.attempt} < ${this.maxAttempts}`)
          return this.askCode()
        }
        const state = await this.getState()
        delete state.phoneCodeHash
        await this.set(state, true)
        throw error
      })
  }

  public async clearState (): Promise<ag.Auth> {
    await this.set({ phoneNumber: await this.get('phoneNumber') }, true)
    return this
  }

  public async getState (): Promise<ag.AuthDoc> {
    if (this.state) {
      return Promise.resolve(this.state)
    }
    return this.store.get(this.storeKey).then((state: ag.AuthDoc) => {
      this.state = state || {}
      return this.state
    })
  }

  public login (): Promise<api.AuthAuthorizationUnion> {
    if (this.locked) {
      throw new Error('login() request has been canceled due authorization in progress')
    }
    this.locked = true
    return this.askPhoneNumber()
      .then((phoneNumber: string) => this.sendCode(phoneNumber))
      .then(() => this.askName())
      .then(() => this.askCode())
      .then((authorization: api.AuthAuthorizationUnion) => {
        return authorization
      })
      .finally(() => {
        this.locked = false
      })
  }

  public logout (): Promise<boolean> {
    return this.client.auth.logOut().then(async (result) => {
      if (result) {
        await this.clearState()
      }
      return result
    })
  }

  public middleware (): ag.MiddlewarePromise<any> {
    const handler = compose<ag.Context>([
      async (ctx: ag.Context, next) => {
        const { userId } = await this.getState()
        if (userId) {
          ctx.client.me.id = userId
          return next()
        }

        this.logger.error(`middleware() "${ctx.request!.method}" you are not authorized`)

        return this.login().then(next)
      }
    ])
    return optional(async (ctx: ag.Context) => Auth.middlewareFilter(ctx), handler)
  }

  protected async ask (type: string): Promise<string> {
    const ctx = {
      _: type,
      state: { ...await this.getState() }
    }

    this.logger.verbose(`ask() '${type}'`)

    return new Promise<string>((resolve, reject) => {
      this.handler(ctx, async () => {
        const nextState = await this.getState()
        Object.keys(DIALOGS).forEach((name) => {
          if (name in ctx.state) {
            nextState[name] = ctx.state[name]
          }
        })

        this.logger.verbose(() => `ask() next state '${JSON.stringify(nextState, null, 2)}'`)

        return this.set(nextState).then(() => resolve(nextState[type]))
      }).catch(reject)
    })
  }

  protected askCode (): Promise<api.AuthAuthorizationUnion> {
    return this.ask(DIALOGS.code).then((code: string) => {
      if (!code || !/^\d+$/.test(code)) {
        throw new Error('Invalid authorization code')
      }
      return this.checkCode(code)
    })
  }

  protected async askName (): Promise<string | void> {
    if (await this.get('isRegistered')) {
      return
    }
    return this.ask(DIALOGS.firstName).then(() => this.ask(DIALOGS.lastName))
  }

  protected async askPhoneNumber (): Promise<string> {
    const phoneNumber = await this.get('phoneNumber')
    if (phoneNumber) {
      if (await this.ask(DIALOGS.samePhoneNumber)) {
        return phoneNumber
      } else {
        await this.clearState()
      }
    }
    return this.ask(DIALOGS.phoneNumber).then(async (value) => {
      if (!value) {
        throw new Error('Phone number is not defined')
      }
      if (this.invalidPhoneNumbers.has(value) || !/^\d{10,}$/.test(value.trim())) {
        this.invalidPhoneNumbers.add(value)
        await this.set({ phoneNumber: undefined })
        throw new Error('Invalid phone number')
      }
      return value
    })
  }

  protected get (name: string): Promise<string> {
    return this.getState().then((state: ag.AuthDoc) => state[name])
  }

  protected async sendCode (phoneNumber: string): Promise<ag.AuthDoc> {
    const state = await this.getState()
    if (state.phoneCodeHash && await this.ask(DIALOGS.continue)) {
      return state
    }
    if (!phoneNumber) {
      throw new Error(`sendCode() phone number does not specified`)
    }
    const time = new Date().getTime()
    if (state.waitUntil && state.waitUntil > time) {
      const delay = Math.ceil((state.waitUntil - time) / 1000)
      throw new Error(`sendCode() you send code too often. Wait for ${delay} seconds.`)
    }
    return this.client.auth.sendCode({
      api_hash: this.client.config.app.hash,
      api_id: this.client.config.app.id,
      current_number: false,
      flags: 0,
      phone_number: phoneNumber
    }).then((sentCode) => {
      const nextState = {
        codeType: sentCode.next_type && sentCode.next_type._,
        isRegistered: !!sentCode.phone_registered,
        phoneCodeHash: sentCode.phone_code_hash,
        phoneNumber,
        waitUntil: new Date().getTime() + ((sentCode.timeout || 1) * 1000)
      }

      this.logger.verbose(() => `sendCode() next state '${JSON.stringify(nextState, null, 2)}'`)

      return this.set(nextState)
    }).catch(async (error) => {
      if (error instanceof RpcError && ((error.type === 'PHONE_NUMBER_INVALID'))) {
        this.invalidPhoneNumbers.add(phoneNumber)
        return this.set({ phoneNumber: undefined })
          .then(() => this.askPhoneNumber())
          .then((nextPhoneNumber: string) => this.sendCode(nextPhoneNumber))
      }
      throw error
    })
  }

  protected set (nextState: Partial<ag.AuthDoc>, replace?: boolean): Promise<ag.AuthDoc> {
    return this.store.set(this.storeKey, nextState).then((state) => {
      this.state = state
      return state
    })
  }

  protected signIn (code: string): Promise<api.AuthAuthorizationUnion> {
    return this.getState().then((state: ag.AuthDoc) => {
      return this.client.auth.signIn({
        phone_code: code,
        phone_code_hash: state.phoneCodeHash!,
        phone_number: state.phoneNumber!
      })
    })
  }

  protected signUp (code: string): Promise<api.AuthAuthorizationUnion> {
    return this.getState().then((state: ag.AuthDoc) => {
      if (!state.firstName || !state.lastName) {
        throw new Error(`signUp() first name and last name must be set`)
      }
      return this.client.auth.signUp({
        first_name: state.firstName,
        last_name: state.lastName,
        phone_code: code,
        phone_code_hash: state.phoneCodeHash!,
        phone_number: state.phoneNumber!
      })
    })
  }
}
