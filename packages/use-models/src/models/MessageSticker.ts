import { Sticker } from '@airgram/core'

/** A sticker message */
export class MessageStickerBaseModel {
  public _: 'messageSticker'

  /** Message content */
  public sticker: Sticker
}
