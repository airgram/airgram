/** The message Time To Live setting for a chat was changed */
export class UpdateChatMessageTtlBaseModel {
  public _: 'updateChatMessageTtl'

  /** Chat identifier */
  public chatId: number

  /** New value of message_ttl */
  public messageTtl: number
}
