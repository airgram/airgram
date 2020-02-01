/** Describes the type of a proxy server */
export type ProxyTypeUnion = ProxyTypeSocks5 | ProxyTypeHttp | ProxyTypeMtproto

/** A SOCKS5 proxy server */
export interface ProxyTypeSocks5 {
  _: 'proxyTypeSocks5'
  /** Username for logging in; may be empty */
  username: string
  /** Password for logging in; may be empty */
  password: string
}

/** A HTTP transparent proxy server */
export interface ProxyTypeHttp {
  _: 'proxyTypeHttp'
  /** Username for logging in; may be empty */
  username: string
  /** Password for logging in; may be empty */
  password: string
  /**
   * Pass true, if the proxy supports only HTTP requests and doesn't support transparent
   * TCP connections via HTTP CONNECT method
   */
  httpOnly: boolean
}

/** An MTProto proxy server */
export interface ProxyTypeMtproto {
  _: 'proxyTypeMtproto'
  /** The proxy's secret in hexadecimal encoding */
  secret: string
}
