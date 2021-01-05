import { PlainObjectToModelTransformer, TdObject } from '@airgram/core'

export interface TdJsonConfig {
  command?: string
  models?: PlainObjectToModelTransformer
  timeout?: number
}

export type NativeTdObject = (TdObject & { '@extra': string; '@client_id': string }) | null

export type UpdateHandlerFn = (update: TdObject) => any

export interface TdProviderConfig {
  handleUpdate: (update: TdObject) => Promise<unknown>
}
