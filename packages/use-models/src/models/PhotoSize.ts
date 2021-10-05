import { File } from '@airgram/core'

/** Describes an image in JPEG format */
export class PhotoSizeBaseModel {
  public _: 'photoSize'

  /** Image type (see https://core.telegram.org/constructor/photoSize) */
  public type: string

  /** Information about the image file */
  public photo: File

  /** Image width */
  public width: number

  /** Image height */
  public height: number

  /**
   * Sizes of progressive JPEG file prefixes, which can be used to preliminarily show
   * the image; in bytes
   */
  public progressiveSizes: number[]
}
