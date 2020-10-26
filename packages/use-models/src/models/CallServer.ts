import { CallServerTypeUnion } from '@airgram/core'

/** Describes a server for relaying call data */
export class CallServerBaseModel {
  public _: 'callServer'

  /** Server identifier */
  public id: string

  /** Server IPv4 address */
  public ipAddress: string

  /** Server IPv6 address */
  public ipv6Address: string

  /** Server port number */
  public port: number

  /** Server type */
  public type: CallServerTypeUnion
}
