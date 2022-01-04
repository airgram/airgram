import { ChatMemberStatusUnion, MessageSenderUnion } from '@airgram/core'

/** Describes a user or a chat as a member of another chat */
export class ChatMemberBaseModel {
  public _: 'chatMember'

  /**
   * Identifier of the chat member. Currently, other chats can be only Left or Banned.
   * Only supergroups and channels can have other chats as Left or Banned members and
   * these chats must be supergroups or channels
   */
  public memberId: MessageSenderUnion

  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  public inviterUserId: number

  /** Point in time (Unix timestamp) when the user joined the chat */
  public joinedChatDate: number

  /** Status of the member in the chat */
  public status: ChatMemberStatusUnion
}
