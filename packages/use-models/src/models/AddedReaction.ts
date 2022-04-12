import { MessageSenderUnion } from '@airgram/core'

/** Represents a reaction applied to a message */
export class AddedReactionBaseModel {
  public _: 'addedReaction'

  /** Text representation of the reaction */
  public reaction: string

  /** Identifier of the chat member, applied the reaction */
  public senderId: MessageSenderUnion
}
