import { ChatMemberStatusUnion, MessageSenderUnion } from './index'

export type ChatMemberUnion = ChatMember

/** Describes a user or a chat as a member of another chat */
export interface ChatMember {
  _: 'chatMember'
  /**
   * Identifier of the chat member. Currently, other chats can be only Left or Banned.
   * Only supergroups and channels can have other chats as Left or Banned members and
   * these chats must be supergroups or channels
   */
  memberId: MessageSenderUnion
  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  inviterUserId: number
  /** Point in time (Unix timestamp) when the user joined the chat */
  joinedChatDate: number
  /** Status of the member in the chat */
  status: ChatMemberStatusUnion
}
