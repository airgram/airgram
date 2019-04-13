import { Wallpaper } from '../outputs'

/** Contains a list of wallpapers */
export class WallpapersBaseModel {
  public _: 'wallpapers'
  /** A list of wallpapers */
  public wallpapers: Wallpaper[]
}
