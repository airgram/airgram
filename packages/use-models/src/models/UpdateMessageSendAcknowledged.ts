/**
 * A request to send a message has reached the Telegram server. This doesn't mean that
 * the message will be sent successfully or even that the send message request will
 * be processed. This update will be sent only if the option "use_quick_ack" is set
 * to true. This update may be sent multiple times for the same message
 */
export class UpdateMessageSendAcknowledgedBaseModel {
  public _: 'updateMessageSendAcknowledged'

  /** The chat identifier of the sent message */
  public chatId: number

  /** A temporary message identifier */
  public messageId: number
}
