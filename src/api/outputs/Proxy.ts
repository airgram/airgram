import { ProxyTypeUnion } from './index'

export type ProxyUnion = Proxy

/** Contains information about a proxy server */
export interface Proxy {
  _: 'proxy'
  /** Unique identifier of the proxy */
  id: number
  /** Proxy server IP address */
  server: string
  /** Proxy server port */
  port: number
  /** Point in time (Unix timestamp) when the proxy was last used; 0 if never */
  lastUsedDate: number
  /** True, if the proxy is enabled now */
  isEnabled: boolean
  /** Type of the proxy */
  type: ProxyTypeUnion
}
