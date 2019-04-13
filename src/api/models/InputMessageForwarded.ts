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
}
