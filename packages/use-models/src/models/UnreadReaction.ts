import { MessageSenderUnion } from '@airgram/core'

/** Contains information about an unread reaction to a message */
export class UnreadReactionBaseModel {
  public _: 'unreadReaction'

  /** Text representation of the reaction */
  public reaction: string

  /** Identifier of the sender, added the reaction */
  public senderId: MessageSenderUnion

  /** True, if the reaction was added with a big animation */
  public isBig: boolean
}
