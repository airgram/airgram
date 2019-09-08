export type MinithumbnailUnion = Minithumbnail

/** Thumbnail image of a very poor quality and low resolution */
export interface Minithumbnail {
  _: 'minithumbnail'
  /** Thumbnail width, usually doesn't exceed 40 */
  width: number
  /** Thumbnail height, usually doesn't exceed 40 */
  height: number
  /** The thumbnail in JPEG format */
  data: string
}
