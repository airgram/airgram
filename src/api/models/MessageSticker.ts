import { Sticker } from '../outputs'

/** A sticker message */
export class MessageStickerBaseModel {
  public _: 'messageSticker'
  /** Message content */
  public sticker: Sticker
}
