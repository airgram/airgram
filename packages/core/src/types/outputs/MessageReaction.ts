import { MessageSenderUnion } from './index'

export type MessageReactionUnion = MessageReaction

/** Contains information about a reaction to a message */
export interface MessageReaction {
  _: 'messageReaction'
  /** Text representation of the reaction */
  reaction: string
  /** Number of times the reaction was added */
  totalCount: number
  /** True, if the reaction is chosen by the current user */
  isChosen: boolean
  /**
   * Identifiers of at most 3 recent message senders, added the reaction; available in
   * private chats, basic groups and supergroups
   */
  recentSenderIds: MessageSenderUnion[]
}
