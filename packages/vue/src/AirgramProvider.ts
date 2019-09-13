import { Airgram, Instance, TdObject } from '@airgram/web'
import Vue from 'vue'
import { UpdateHandler } from './types'

export interface TdProviderConfig<ContextT> {
  airgram: Airgram<ContextT>
}

class AirgramProvider<ContextT = {}> {
  public static install: any

  public readonly airgram: Instance<ContextT>

  private readonly eventBus: Vue

  private isInitialized = false

  constructor ({ airgram }: TdProviderConfig<ContextT>) {
    this.airgram = airgram
    this.eventBus = new Vue()
  }

  public off<UpdateT extends TdObject> (
    eventName: string,
    handler: UpdateHandler<UpdateT>
  ): void {
    this.eventBus.$off(eventName, handler)
  }

  public on<UpdateT extends TdObject> (
    eventName: string,
    handler: UpdateHandler<UpdateT>
  ): () => void {
    return this.listen('$on', eventName, handler)
  }

  public once<UpdateT extends TdObject> (
    eventName: string,
    handler: UpdateHandler<UpdateT>
  ): () => void {
    return this.listen('$once', eventName, handler)
  }

  private initialize (): void {
    this.airgram.use((ctx, next) => {
      if ('update' in ctx) {
        this.eventBus.$emit(ctx._, ctx)
      }
      return next()
    })
  }

  private listen (type: '$on' | '$once', eventName: string, handler: UpdateHandler<any>): () => void {
    if (!this.isInitialized) {
      this.initialize()
    }
    this.isInitialized = true
    this.eventBus[type](eventName, handler)
    return () => this.off(eventName, handler)
  }
}

export {
  AirgramProvider
}
