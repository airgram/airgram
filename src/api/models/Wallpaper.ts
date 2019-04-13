import { PhotoSize } from '../outputs'

/** Contains information about a wallpaper */
export class WallpaperBaseModel {
  public _: 'wallpaper'
  /** Unique persistent wallpaper identifier */
  public id: number
  /**
   * Available variants of the wallpaper in different sizes. These photos can only be
   * downloaded; they can't be sent in a message
   */
  public sizes: PhotoSize[]
  /**
   * Main color of the wallpaper in RGB24 format; should be treated as background color
   * if no photos are specified
   */
  public color: number
}
