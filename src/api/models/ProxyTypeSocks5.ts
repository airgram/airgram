/** A SOCKS5 proxy server */
export class ProxyTypeSocks5BaseModel {
  public _: 'proxyTypeSocks5'
  /** Username for logging in; may be empty */
  public username: string
  /** Password for logging in; may be empty */
  public password: string
}
