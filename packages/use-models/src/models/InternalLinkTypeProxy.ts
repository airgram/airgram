import { ProxyTypeUnion } from '@airgram/core'

/**
 * The link is a link to a proxy. Call addProxy with the given parameters to process
 * the link and add the proxy
 */
export class InternalLinkTypeProxyBaseModel {
  public _: 'internalLinkTypeProxy'

  /** Proxy server IP address */
  public server: string

  /** Proxy server port */
  public port: number

  /** Type of the proxy */
  public type: ProxyTypeUnion
}
