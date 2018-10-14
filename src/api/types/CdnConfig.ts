import { CdnPublicKeyUnion } from './CdnPublicKey'

export interface CdnConfig {
  _: 'cdnConfig'
  public_keys: CdnPublicKeyUnion[]
}

export type CdnConfigUnion = CdnConfig
