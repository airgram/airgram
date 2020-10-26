import { PlainObjectToModelTransformer, TdObject } from '@airgram/core'

export interface TdProxyConfig {
  command?: string
  models?: PlainObjectToModelTransformer
  timeout?: number
}

export interface TdProviderConfig {
  handleUpdate: (update: TdObject) => Promise<unknown>
}
