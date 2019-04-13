import { File } from '../outputs'

/** Photo description */
export class PhotoSizeBaseModel {
  public _: 'photoSize'
  /** Thumbnail type (see https://core.telegram.org/constructor/photoSize) */
  public type: string
  /** Information about the photo file */
  public photo: File
  /** Photo width */
  public width: number
  /** Photo height */
  public height: number
}
