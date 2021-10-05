import { Sticker } from '@airgram/core'

/**
 * Some animated emoji message was clicked and a big animated sticker must be played
 * if the message is visible on the screen. chatActionWatchingAnimations with the text
 * of the message needs to be sent if the sticker is played
 */
export class UpdateAnimatedEmojiMessageClickedBaseModel {
  public _: 'updateAnimatedEmojiMessageClicked'

  /** Chat identifier */
  public chatId: number

  /** Message identifier */
  public messageId: number

  /** The animated sticker to be played */
  public sticker: Sticker
}
