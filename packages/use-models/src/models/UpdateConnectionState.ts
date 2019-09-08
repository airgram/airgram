import { ConnectionStateUnion } from '@airgram/core'

/** The connection state has changed */
export class UpdateConnectionStateBaseModel {
  public _: 'updateConnectionState'

  /** The new connection state */
  public state: ConnectionStateUnion
}
