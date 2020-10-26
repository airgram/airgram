import { InputFileInputUnion } from './index'

export type InputThumbnailInputUnion = InputThumbnailInput

/**
 * A thumbnail to be sent along with a file; must be in JPEG or WEBP format for stickers,
 * and less than 200 KB in size
 */
export interface InputThumbnailInput {
  _: 'inputThumbnail'
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  thumbnail?: InputFileInputUnion
  /** Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown */
  width?: number
  /** Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown */
  height?: number
}
