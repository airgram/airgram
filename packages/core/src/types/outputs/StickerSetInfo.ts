import { ClosedVectorPath, Sticker, Thumbnail } from './index'

export type StickerSetInfoUnion = StickerSetInfo

/** Represents short information about a sticker set */
export interface StickerSetInfo {
  _: 'stickerSetInfo'
  /** Identifier of the sticker set */
  id: string
  /** Title of the sticker set */
  title: string
  /** Name of the sticker set */
  name: string
  /** Sticker set thumbnail in WEBP or TGS format with width and height 100; may be null */
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
  /** Total number of stickers in the set */
  size: number
  /**
   * Contains up to the first 5 stickers from the set, depending on the context. If the
   * application needs more stickers the full sticker set needs to be requested
   */
  covers: Sticker[]
}
