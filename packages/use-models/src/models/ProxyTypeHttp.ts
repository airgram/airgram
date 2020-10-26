/** A HTTP transparent proxy server */
export class ProxyTypeHttpBaseModel {
  public _: 'proxyTypeHttp'

  /** Username for logging in; may be empty */
  public username: string

  /** Password for logging in; may be empty */
  public password: string

  /**
   * Pass true if the proxy supports only HTTP requests and doesn't support transparent
   * TCP connections via HTTP CONNECT method
   */
  public httpOnly: boolean
}
