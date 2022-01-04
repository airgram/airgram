import { ChatInviteLink, ChatJoinRequest } from '@airgram/core'

/** A user sent a join request to a chat; for bots only */
export class UpdateNewChatJoinRequestBaseModel {
  public _: 'updateNewChatJoinRequest'

  /** Chat identifier */
  public chatId: number

  /** Join request */
  public request: ChatJoinRequest

  /** The invite link, which was used to send join request; may be null */
  public inviteLink?: ChatInviteLink
}
