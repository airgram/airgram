/** Thumbnail image of a very poor quality and low resolution */
export class MinithumbnailBaseModel {
  public _: 'minithumbnail'

  /** Thumbnail width, usually doesn't exceed 40 */
  public width: number

  /** Thumbnail height, usually doesn't exceed 40 */
  public height: number

  /** The thumbnail in JPEG format */
  public data: string
}
