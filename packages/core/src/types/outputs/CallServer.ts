import { CallServerTypeUnion } from './index'

export type CallServerUnion = CallServer

/** Describes a server for relaying call data */
export interface CallServer {
  _: 'callServer'
  /** Server identifier */
  id: string
  /** Server IPv4 address */
  ipAddress: string
  /** Server IPv6 address */
  ipv6Address: string
  /** Server port number */
  port: number
  /** Server type */
  type: CallServerTypeUnion
}
