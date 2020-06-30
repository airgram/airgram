import { File, ThumbnailFormatUnion } from './index'

export type ThumbnailUnion = Thumbnail

/** Represents a thumbnail */
export interface Thumbnail {
  _: 'thumbnail'
  /** Thumbnail format */
  format: ThumbnailFormatUnion
  /** Thumbnail width */
  width: number
  /** Thumbnail height */
  height: number
  /** The thumbnail */
  file: File
}
