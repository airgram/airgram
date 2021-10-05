import { ChatInviteLink, ChatMember } from '@airgram/core'

/** User rights changed in a chat; for bots only */
export class UpdateChatMemberBaseModel {
  public _: 'updateChatMember'

  /** Chat identifier */
  public chatId: number

  /** Identifier of the user, changing the rights */
  public actorUserId: number

  /** Point in time (Unix timestamp) when the user rights was changed */
  public date: number

  /** If user has joined the chat using an invite link, the invite link; may be null */
  public inviteLink?: ChatInviteLink

  /** Previous chat member */
  public oldChatMember: ChatMember

  /** New chat member */
  public newChatMember: ChatMember
}
