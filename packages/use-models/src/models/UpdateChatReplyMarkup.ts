/**
 * The default chat reply markup was changed. Can occur because new messages with reply
 * markup were received or because an old reply markup was hidden by the user
 */
export class UpdateChatReplyMarkupBaseModel {
  public _: 'updateChatReplyMarkup'

  /** Chat identifier */
  public chatId: number

  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  public replyMarkupMessageId: number
}
