import { StickerSets } from '@airgram/core'

/** The list of trending sticker sets was updated or some of them were viewed */
export class UpdateTrendingStickerSetsBaseModel {
  public _: 'updateTrendingStickerSets'

  /** The new list of trending sticker sets */
  public stickerSets: StickerSets
}
