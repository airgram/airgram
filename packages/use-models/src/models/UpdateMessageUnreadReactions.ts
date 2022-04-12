import { UnreadReaction } from '@airgram/core'

/** The list of unread reactions added to a message was changed */
export class UpdateMessageUnreadReactionsBaseModel {
  public _: 'updateMessageUnreadReactions'

  /** Chat identifier */
  public chatId: number

  /** Message identifier */
  public messageId: number

  /** The new list of unread reactions */
  public unreadReactions: UnreadReaction[]

  /** The new number of messages with unread reactions left in the chat */
  public unreadReactionCount: number
}
