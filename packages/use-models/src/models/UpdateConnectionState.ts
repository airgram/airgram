import { ConnectionStateUnion } from '@airgram/core'

/**
 * The connection state has changed. This update must be used only to show the user
 * a human-readable description of the connection state
 */
export class UpdateConnectionStateBaseModel {
  public _: 'updateConnectionState'

  /** The new connection state */
  public state: ConnectionStateUnion
}
