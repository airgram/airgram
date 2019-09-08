import { ChatPermissions } from '@airgram/core'

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export class ChatMemberStatusRestrictedBaseModel {
  public _: 'chatMemberStatusRestricted'

  /** True, if the user is a member of the chat */
  public isMember: boolean

  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  public restrictedUntilDate: number

  /** User permissions in the chat */
  public permissions: ChatPermissions
}
