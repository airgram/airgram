import { MessageSenderUnion } from '@airgram/core'

/** Contains information about a reaction to a message */
export class MessageReactionBaseModel {
  public _: 'messageReaction'

  /** Text representation of the reaction */
  public reaction: string

  /** Number of times the reaction was added */
  public totalCount: number

  /** True, if the reaction is chosen by the current user */
  public isChosen: boolean

  /**
   * Identifiers of at most 3 recent message senders, added the reaction; available in
   * private chats, basic groups and supergroups
   */
  public recentSenderIds: MessageSenderUnion[]
}
