import { File, ThumbnailFormatUnion } from '@airgram/core'

/** Represents a thumbnail */
export class ThumbnailBaseModel {
  public _: 'thumbnail'

  /** Thumbnail format */
  public format: ThumbnailFormatUnion

  /** Thumbnail width */
  public width: number

  /** Thumbnail height */
  public height: number

  /** The thumbnail */
  public file: File
}
