/** Describes the type of a proxy server */
export type ProxyTypeInputUnion = ProxyTypeSocks5Input
  | ProxyTypeHttpInput
  | ProxyTypeMtprotoInput

/** A SOCKS5 proxy server */
export interface ProxyTypeSocks5Input {
  _: 'proxyTypeSocks5'
  /** Username for logging in; may be empty */
  username?: string
  /** Password for logging in; may be empty */
  password?: string
}

/** A HTTP transparent proxy server */
export interface ProxyTypeHttpInput {
  _: 'proxyTypeHttp'
  /** Username for logging in; may be empty */
  username?: string
  /** Password for logging in; may be empty */
  password?: string
  /**
   * Pass true, if the proxy supports only HTTP requests and doesn't support transparent
   * TCP connections via HTTP CONNECT method
   */
  httpOnly?: boolean
}

/** An MTProto proxy server */
export interface ProxyTypeMtprotoInput {
  _: 'proxyTypeMtproto'
  /** The proxy's secret in hexadecimal encoding */
  secret?: string
}
