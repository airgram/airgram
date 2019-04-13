import { PhotoSize } from '../outputs'

/** Describes a photo */
export class PhotoBaseModel {
  public _: 'photo'
  /** Photo identifier; 0 for deleted photos */
  public id: number | string
  /** True, if stickers were added to the photo */
  public hasStickers: boolean
  /** Available variants of the photo, in different sizes */
  public sizes: PhotoSize[]
}
