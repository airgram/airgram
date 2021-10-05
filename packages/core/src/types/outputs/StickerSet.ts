import { ClosedVectorPath, Emojis, Sticker, Thumbnail } from './index'

export type StickerSetUnion = StickerSet

/** Represents a sticker set */
export interface StickerSet {
  _: 'stickerSet'
  /** Identifier of the sticker set */
  id: string
  /** Title of the sticker set */
  title: string
  /** Name of the sticker set */
  name: string
  /**
   * Sticker set thumbnail in WEBP or TGS format with width and height 100; may be null.
   * The file can be downloaded only before the thumbnail is changed
   */
  thumbnail?: Thumbnail
  /**
   * Sticker set thumbnail's outline represented as a list of closed vector paths; may
   * be empty. The coordinate system origin is in the upper-left corner
   */
  thumbnailOutline: ClosedVectorPath[]
  /** True, if the sticker set has been installed by the current user */
  isInstalled: boolean
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  isArchived: boolean
  /** True, if the sticker set is official */
  isOfficial: boolean
  /** True, is the stickers in the set are animated */
  isAnimated: boolean
  /** True, if the stickers in the set are masks */
  isMasks: boolean
  /** True for already viewed trending sticker sets */
  isViewed: boolean
  /** List of stickers in this set */
  stickers: Sticker[]
  /**
   * A list of emoji corresponding to the stickers in the same order. The list is only
   * for informational purposes, because a sticker is always sent with a fixed emoji from
   * the corresponding Sticker object
   */
  emojis: Emojis[]
}
