/** The message was sent by a known user */
export class MessageSenderUserBaseModel {
  public _: 'messageSenderUser'

  /** Identifier of the user that sent the message */
  public userId: number
}
