/** The message was originally sent by a known user */
export class MessageForwardOriginUserBaseModel {
  public _: 'messageForwardOriginUser'

  /** Identifier of the user that originally sent the message */
  public senderUserId: number
}
