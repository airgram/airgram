import { StickerSetInfo } from '@airgram/core'

/** Represents a list of sticker sets */
export class StickerSetsBaseModel {
  public _: 'stickerSets'

  /** Approximate total number of sticker sets found */
  public totalCount: number

  /** List of sticker sets */
  public sets: StickerSetInfo[]
}
