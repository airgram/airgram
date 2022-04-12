import { MessageSenderUnion } from './index'

export type UnreadReactionUnion = UnreadReaction

/** Contains information about an unread reaction to a message */
export interface UnreadReaction {
  _: 'unreadReaction'
  /** Text representation of the reaction */
  reaction: string
  /** Identifier of the sender, added the reaction */
  senderId: MessageSenderUnion
  /** True, if the reaction was added with a big animation */
  isBig: boolean
}
