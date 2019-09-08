import { ChatPermissions } from '@airgram/core'

/** The chat permissions was changed */
export class ChatEventPermissionsChangedBaseModel {
  public _: 'chatEventPermissionsChanged'

  /** Previous chat permissions */
  public oldPermissions: ChatPermissions

  /** New chat permissions */
  public newPermissions: ChatPermissions
}
