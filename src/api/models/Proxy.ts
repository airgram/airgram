import { ProxyTypeUnion } from '../outputs'

/** Contains information about a proxy server */
export class ProxyBaseModel {
  public _: 'proxy'
  /** Unique identifier of the proxy */
  public id: number
  /** Proxy server IP address */
  public server: string
  /** Proxy server port */
  public port: number
  /** Point in time (Unix timestamp) when the proxy was last used; 0 if never */
  public lastUsedDate: number
  /** True, if the proxy is enabled now */
  public isEnabled: boolean
  /** Type of the proxy */
  public type: ProxyTypeUnion
}
