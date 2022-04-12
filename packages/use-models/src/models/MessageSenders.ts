import { MessageSenderUnion } from '@airgram/core'

/** Represents a list of message senders */
export class MessageSendersBaseModel {
  public _: 'messageSenders'

  /** Approximate total number of messages senders found */
  public totalCount: number

  /** List of message senders */
  public senders: MessageSenderUnion[]
}
