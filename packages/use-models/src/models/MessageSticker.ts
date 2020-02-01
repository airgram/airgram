import { Sticker } from '@airgram/core'

/** A sticker message */
export class MessageStickerBaseModel {
  public _: 'messageSticker'

  /** The sticker description */
  public sticker: Sticker
}
