import { PhotoSize } from './index'

export type PhotoUnion = Photo

/** Describes a photo */
export interface Photo {
  _: 'photo'
  /** Photo identifier; 0 for deleted photos */
  id: number | string
  /** True, if stickers were added to the photo */
  hasStickers: boolean
  /** Available variants of the photo, in different sizes */
  sizes: PhotoSize[]
}
