/** The TTL (Time To Live) setting messages in a secret chat has been changed */
export class MessageChatSetTtlBaseModel {
  public _: 'messageChatSetTtl'
  /** New TTL */
  public ttl: number
}
