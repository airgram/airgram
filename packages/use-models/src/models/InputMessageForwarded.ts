/** A forwarded message */
export class InputMessageForwardedBaseModel {
  public _: 'inputMessageForwarded'

  /** Identifier for the chat this forwarded message came from */
  public fromChatId: number

  /** Identifier of the message to forward */
  public messageId: number

  /**
   * True, if a game message should be shared within a launched game; applies only to
   * game messages
   */
  public inGameShare: boolean

  /**
   * True, if content of the message needs to be copied without a link to the original
   * message. Always true if the message is forwarded to a secret chat
   */
  public sendCopy: boolean

  /**
   * True, if media caption of the message copy needs to be removed. Ignored if send_copy
   * is false
   */
  public removeCaption: boolean
}
