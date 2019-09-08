/** A message has been pinned */
export class MessagePinMessageBaseModel {
  public _: 'messagePinMessage'

  /** Identifier of the pinned message, can be an identifier of a deleted message or 0 */
  public messageId: number
}
