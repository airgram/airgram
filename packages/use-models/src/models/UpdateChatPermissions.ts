import { ChatPermissions } from '@airgram/core'

/** Chat permissions was changed */
export class UpdateChatPermissionsBaseModel {
  public _: 'updateChatPermissions'

  /** Chat identifier */
  public chatId: number

  /** The new chat permissions */
  public permissions: ChatPermissions
}
