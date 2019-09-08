import { Proxy } from '@airgram/core'

/** Represents a list of proxy servers */
export class ProxiesBaseModel {
  public _: 'proxies'

  /** List of proxy servers */
  public proxies: Proxy[]
}
