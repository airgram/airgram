import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import * as api from '../api'
import { reduce } from '../helpers'
import { ag } from '../interfaces'
import TYPES from '../ioc/types'

interface BasePendingState {
  date?: number
  pts?: number
  seq?: number
}

@provide(TYPES.PendingState)
export default abstract class BaseUpdatesState<StateT extends BasePendingState> implements ag.PendingState<StateT> {
  public delay: number = 5000
  public id: any
  private _loading: boolean = false
  private ptsAwaiting: boolean
  private ptsUpdates: api.UpdateUnion[] = []
  private seqAwaiting: number
  private seqUpdates: { [key: number]: ag.PendingSeqUpdate } = {}
  private timeout: any

  protected constructor (
    @inject(TYPES.Logger) public logger: ag.Logger
  ) {}

  get loading (): boolean {
    return this._loading
  }

  public async applyPtsUpdates (complete: (update: ag.UpdatesResponse) => Promise<any>): Promise<boolean> {
    const handle = (updates: ag.UpdatesResponse[]) => reduce(updates.map((update) => complete(update))).then(() => {
      if (!this.ptsUpdates.length) {
        if (!this.seqAwaiting) {
          this.clearTimeout()
        }
        this.ptsAwaiting = false
      }
      return true
    })

    return this.popPtsUpdates().then((updates) => updates ? handle(updates) : false)
  }

  public async applySeqUpdates (complete: (update: ag.UpdatesResponse) => Promise<any>): Promise<boolean> {
    const currentState: StateT = await this.get()
    const nextSeq = (currentState.seq || 0) + 1
    const pending = this.seqUpdates[nextSeq]

    if (!pending) {
      return false
    }

    return reduce(pending.updates.map((update) => complete(update).then(async () => {
      const nextState: Partial<BasePendingState> = {
        seq: pending.seq
      }
      if (pending.date && (currentState.date || 0) < pending.date) {
        nextState.date = pending.date
      }
      delete this.seqUpdates[nextSeq]

      return this.applySeqUpdates(complete).then(async (hasUpdates) => {
        if (!hasUpdates && (nextState.seq || 0) >= this.seqAwaiting) {
          if (!this.ptsAwaiting) {
            this.clearTimeout()
          }
          this.seqAwaiting = 0
        }
        await this.set(nextState as StateT)
        return true
      })
    })))
  }

  public async completeLoading (): Promise<void> {
    this._loading = false
    this.clearTimeout()
    this.logger.info(`Complete loading ${this.id}`)
  }

  public abstract get (): Promise<StateT>
  public abstract get (key?: string): Promise<number>

  public async load (getDifference: () => any): Promise<any> {
    if (!this.loading) {
      this.logger.info(`Start loading ${this.id}`)
      this._loading = true
      this.ptsUpdates = []
      return getDifference()
    }
  }

  public postponePtsUpdate (update: api.UpdateUnion, getDifference: () => any): void {
    this.ptsUpdates.push(update)
    this.ptsAwaiting = true
    this.setTimeout(getDifference)
  }

  public postponeSeqUpdate (
    update: api.UpdateUnion,
    seqStart: number,
    seq: number,
    getDifference: () => any
  ): void {
    if (!(seqStart in this.seqUpdates)) {
      this.seqUpdates[seqStart] = { seq, date: 'date' in update ? update.date : 0, updates: [] }
    }
    this.seqUpdates[seqStart].updates.push(update)

    if (!this.seqAwaiting || this.seqAwaiting < seqStart) {
      this.seqAwaiting = seqStart
    }
    this.setTimeout(getDifference)
  }

  public abstract set (nextState: Partial<StateT>): Promise<void>

  private clearTimeout () {
    clearTimeout(this.timeout)
    this.timeout = null
  }

  private async popPtsUpdates (): Promise<api.UpdateUnion[] | false> {
    if (!this.ptsUpdates.length) {
      return false
    }

    const ptsUpdates = this.ptsUpdates.splice(0, this.ptsUpdates.length)
    const { length } = ptsUpdates
    let { pts } = await this.get()

    if (!pts) {
      return false
    }

    ptsUpdates.sort((a, b) => {
      if (!('pts' in a) || !('pts' in b)) {
        return 0
      }
      return (a.pts || 0) - (b.pts || 0)
    })

    let goodPts: number | null = null
    let size: number = 0

    for (let i = 0; i < length; i++) {
      const update = ptsUpdates[i]
      if ('pts_count' in update) {
        pts += update.pts_count
      }
      if ('pts' in update && typeof update.pts === 'number' && pts >= update.pts) {
        goodPts = update.pts
        size = i + 1
      }
    }

    this.logger.info(() => `popPendingPtsUpdate() pop updates` +
      ` length: ${length}, current pts: ${pts}, good pts: ${goodPts}, size: ${size}`)

    if (goodPts === null) {
      return false
    }
    await this.set({ pts: goodPts } as Partial<StateT>)

    this.logger.verbose(() => `popPendingPtsUpdate() good pts: ${goodPts}, ` +
      `${JSON.stringify(ptsUpdates.slice(0, size), null, 2)}`
    )

    if (size) {
      this.ptsUpdates = this.ptsUpdates.length ?
        [...ptsUpdates.slice(size), ...this.ptsUpdates] :
        ptsUpdates.slice(size)
    }

    return ptsUpdates.splice(0, size)
  }

  private setTimeout (getDifference: () => any) {
    if (!this.timeout) {
      this.timeout = setTimeout(() => this.load(getDifference), this.delay)
    }
  }
}
