import { File } from './index'

export type PhotoSizeUnion = PhotoSize

/** Describes an image in JPEG format */
export interface PhotoSize {
  _: 'photoSize'
  /** Image type (see https://core.telegram.org/constructor/photoSize) */
  type: string
  /** Information about the image file */
  photo: File
  /** Image width */
  width: number
  /** Image height */
  height: number
  /**
   * Sizes of progressive JPEG file prefixes, which can be used to preliminarily show
   * the image; in bytes
   */
  progressiveSizes: number[]
}
