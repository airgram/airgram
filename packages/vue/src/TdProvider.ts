import { Airgram } from 'tdweb-airgram'
import Vue from 'vue'
import { TdEventContext, TdEventHandler } from './types'

export interface TdProviderConfig<ContextT> {
  airgram: Airgram<ContextT>
}

class TdProvider<ContextT = {}> {
  public static install: any

  public readonly airgram: Airgram.Instance<ContextT>

  private readonly eventBus: Vue

  private isInitialized: boolean = false

  constructor ({ airgram }: TdProviderConfig<ContextT>) {
    this.airgram = airgram
    this.eventBus = new Vue()
  }

  public off<UpdateT extends Airgram.ResponseBody> (
    eventName: string,
    handler: TdEventHandler<UpdateT, ContextT>
  ): void {
    this.eventBus.$off(eventName, handler)
  }

  public on<UpdateT extends Airgram.ResponseBody> (
    eventName: string,
    handler: TdEventHandler<UpdateT, ContextT>
  ): () => void {
    return this.listen('$on', eventName, handler)
  }

  public once<UpdateT extends Airgram.ResponseBody> (
    eventName: string,
    handler: TdEventHandler<UpdateT, ContextT>
  ): () => void {
    return this.listen('$once', eventName, handler)
  }

  private initialize () {
    this.airgram.use((ctx) => {
      if ('update' in ctx) {
        const { _, update, ...eventContext } = ctx
        this.eventBus.$emit(_, update, eventContext as TdEventContext<any, ContextT>)
      }
    })
  }

  private listen (type: '$on' | '$once', eventName: string, handler: TdEventHandler<any, ContextT>): () => void {
    if (!this.isInitialized) {
      this.initialize()
    }
    this.isInitialized = true
    this.eventBus[type](eventName, handler)
    return () => this.off(eventName, handler)
  }
}

export {
  TdProvider
}
