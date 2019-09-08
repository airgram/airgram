import { File } from './index'

export type PhotoSizeUnion = PhotoSize

/** Photo description */
export interface PhotoSize {
  _: 'photoSize'
  /** Thumbnail type (see https://core.telegram.org/constructor/photoSize) */
  type: string
  /** Information about the photo file */
  photo: File
  /** Photo width */
  width: number
  /** Photo height */
  height: number
}
