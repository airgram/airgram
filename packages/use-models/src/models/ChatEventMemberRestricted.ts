import { ChatMemberStatusUnion, MessageSenderUnion } from '@airgram/core'

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their
 * restrictions has changed
 */
export class ChatEventMemberRestrictedBaseModel {
  public _: 'chatEventMemberRestricted'

  /** Affected chat member identifier */
  public memberId: MessageSenderUnion

  /** Previous status of the chat member */
  public oldStatus: ChatMemberStatusUnion

  /** New status of the chat member */
  public newStatus: ChatMemberStatusUnion
}
