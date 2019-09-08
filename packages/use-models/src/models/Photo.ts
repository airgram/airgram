import { Minithumbnail, PhotoSize } from '@airgram/core'

/** Describes a photo */
export class PhotoBaseModel {
  public _: 'photo'

  /** True, if stickers were added to the photo */
  public hasStickers: boolean

  /** Photo minithumbnail; may be null */
  public minithumbnail?: Minithumbnail

  /** Available variants of the photo, in different sizes */
  public sizes: PhotoSize[]
}
