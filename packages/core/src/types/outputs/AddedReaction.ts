import { MessageSenderUnion } from './index'

export type AddedReactionUnion = AddedReaction

/** Represents a reaction applied to a message */
export interface AddedReaction {
  _: 'addedReaction'
  /** Text representation of the reaction */
  reaction: string
  /** Identifier of the chat member, applied the reaction */
  senderId: MessageSenderUnion
}
