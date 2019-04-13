import { BotInfo, ChatMemberStatusUnion } from './index'

export type ChatMemberUnion = ChatMember

/** A user with information about joining/leaving a chat */
export interface ChatMember {
  _: 'chatMember'
  /** User identifier of the chat member */
  userId: number
  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  inviterUserId: number
  /** Point in time (Unix timestamp) when the user joined a chat */
  joinedChatDate: number
  /** Status of the member in the chat */
  status: ChatMemberStatusUnion
  /**
   * If the user is a bot, information about the bot; may be null. Can be null even for
   * a bot if the bot is not a chat member
   */
  botInfo?: BotInfo
}
