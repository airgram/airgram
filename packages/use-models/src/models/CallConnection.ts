/** Describes the address of UDP reflectors */
export class CallConnectionBaseModel {
  public _: 'callConnection'

  /** Reflector identifier */
  public id: string

  /** IPv4 reflector address */
  public ip: string

  /** IPv6 reflector address */
  public ipv6: string

  /** Reflector port number */
  public port: number

  /** Connection peer tag */
  public peerTag: string
}
