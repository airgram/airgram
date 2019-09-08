/** A wallpaper in JPEG format */
export class BackgroundTypeWallpaperBaseModel {
  public _: 'backgroundTypeWallpaper'

  /**
   * True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred
   * with radius 12
   */
  public isBlurred: boolean

  /** True, if the background needs to be slightly moved when device is rotated */
  public isMoving: boolean
}
