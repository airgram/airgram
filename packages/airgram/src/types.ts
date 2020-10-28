import { PlainObjectToModelTransformer, TdObject } from '@airgram/core'

export interface TdJsonConfig {
  command?: string
  models?: PlainObjectToModelTransformer
  timeout?: number
}

export interface TdProviderConfig {
  handleUpdate: (update: TdObject) => Promise<unknown>
}
