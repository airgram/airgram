import { Minithumbnail, PhotoSize } from './index'

export type PhotoUnion = Photo

/** Describes a photo */
export interface Photo {
  _: 'photo'
  /**
   * True, if stickers were added to the photo. The list of corresponding sticker sets
   * can be received using getAttachedStickerSets
   */
  hasStickers: boolean
  /** Photo minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /** Available variants of the photo, in different sizes */
  sizes: PhotoSize[]
}
