import { StickerSet } from '@airgram/core'

/** A sticker set has changed */
export class UpdateStickerSetBaseModel {
  public _: 'updateStickerSet'

  /** The sticker set */
  public stickerSet: StickerSet
}
