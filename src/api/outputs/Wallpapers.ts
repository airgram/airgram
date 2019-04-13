import { Wallpaper } from './index'

export type WallpapersUnion = Wallpapers

/** Contains a list of wallpapers */
export interface Wallpapers {
  _: 'wallpapers'
  /** A list of wallpapers */
  wallpapers: Wallpaper[]
}
