import { MessageCopyOptions } from '@airgram/core'

/** A forwarded message */
export class InputMessageForwardedBaseModel {
  public _: 'inputMessageForwarded'

  /** Identifier for the chat this forwarded message came from */
  public fromChatId: number

  /** Identifier of the message to forward */
  public messageId: number

  /**
   * True, if a game message is being shared from a launched game; applies only to game
   * messages
   */
  public inGameShare: boolean

  /**
   * Options to be used to copy content of the message without reference to the original
   * sender; pass null to try to forward the message as usual
   */
  public copyOptions: MessageCopyOptions
}
