import { StickerSets } from '@airgram/core'

/** The list of trending sticker sets was updated or some of them were viewed */
export class UpdateTrendingStickerSetsBaseModel {
  public _: 'updateTrendingStickerSets'

  /**
   * The prefix of the list of trending sticker sets with the newest trending sticker
   * sets
   */
  public stickerSets: StickerSets
}
