/** The message TTL was changed */
export class ChatEventMessageTtlChangedBaseModel {
  public _: 'chatEventMessageTtlChanged'

  /** Previous value of message_ttl */
  public oldMessageTtl: number

  /** New value of message_ttl */
  public newMessageTtl: number
}
