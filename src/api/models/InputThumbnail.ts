import { InputFileUnion } from '../outputs'

/**
 * A thumbnail to be sent along with a file; should be in JPEG or WEBP format for stickers,
 * and less than 200 kB in size
 */
export class InputThumbnailBaseModel {
  public _: 'inputThumbnail'
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  public thumbnail: InputFileUnion
  /** Thumbnail width, usually shouldn't exceed 90. Use 0 if unknown */
  public width: number
  /** Thumbnail height, usually shouldn't exceed 90. Use 0 if unknown */
  public height: number
}
