import { BotInfo, ChatMemberStatusUnion } from '@airgram/core'

/** A user with information about joining/leaving a chat */
export class ChatMemberBaseModel {
  public _: 'chatMember'

  /** User identifier of the chat member */
  public userId: number

  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  public inviterUserId: number

  /** Point in time (Unix timestamp) when the user joined a chat */
  public joinedChatDate: number

  /** Status of the member in the chat */
  public status: ChatMemberStatusUnion

  /**
   * If the user is a bot, information about the bot; may be null. Can be null even for
   * a bot if the bot is not a chat member
   */
  public botInfo?: BotInfo
}
