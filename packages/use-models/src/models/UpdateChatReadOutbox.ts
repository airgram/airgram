/** Outgoing messages were read */
export class UpdateChatReadOutboxBaseModel {
  public _: 'updateChatReadOutbox'

  /** Chat identifier */
  public chatId: number

  /** Identifier of last read outgoing message */
  public lastReadOutboxMessageId: number
}
