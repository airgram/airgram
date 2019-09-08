import { ChatMemberStatusUnion } from '@airgram/core'

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their
 * restrictions has changed
 */
export class ChatEventMemberRestrictedBaseModel {
  public _: 'chatEventMemberRestricted'

  /** Chat member user identifier */
  public userId: number

  /** Previous status of the chat member */
  public oldStatus: ChatMemberStatusUnion

  /** New status of the chat member */
  public newStatus: ChatMemberStatusUnion
}
