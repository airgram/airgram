export type CallConnectionUnion = CallConnection

/** Describes the address of UDP reflectors */
export interface CallConnection {
  _: 'callConnection'
  /** Reflector identifier */
  id: string
  /** IPv4 reflector address */
  ip: string
  /** IPv6 reflector address */
  ipv6: string
  /** Reflector port number */
  port: number
  /** Connection peer tag */
  peerTag: string
}
