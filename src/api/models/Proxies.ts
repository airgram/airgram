import { Proxy } from '../outputs'

/** Represents a list of proxy servers */
export class ProxiesBaseModel {
  public _: 'proxies'
  /** List of proxy servers */
  public proxies: Proxy[]
}
