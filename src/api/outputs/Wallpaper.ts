import { PhotoSize } from './index'

export type WallpaperUnion = Wallpaper

/** Contains information about a wallpaper */
export interface Wallpaper {
  _: 'wallpaper'
  /** Unique persistent wallpaper identifier */
  id: number
  /**
   * Available variants of the wallpaper in different sizes. These photos can only be
   * downloaded; they can't be sent in a message
   */
  sizes: PhotoSize[]
  /**
   * Main color of the wallpaper in RGB24 format; should be treated as background color
   * if no photos are specified
   */
  color: number
}
