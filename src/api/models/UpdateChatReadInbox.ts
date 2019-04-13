/** Incoming messages were read or number of unread messages has been changed */
export class UpdateChatReadInboxBaseModel {
  public _: 'updateChatReadInbox'
  /** Chat identifier */
  public chatId: number
  /** Identifier of the last read incoming message */
  public lastReadInboxMessageId: number
  /** The number of unread messages left in the chat */
  public unreadCount: number
}
