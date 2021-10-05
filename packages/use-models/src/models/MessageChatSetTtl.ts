/** The TTL (Time To Live) setting for messages in the chat has been changed */
export class MessageChatSetTtlBaseModel {
  public _: 'messageChatSetTtl'

  /** New message TTL setting */
  public ttl: number
}
