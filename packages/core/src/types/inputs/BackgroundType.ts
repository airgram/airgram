/** Describes a type of a background */
export type BackgroundTypeInputUnion = BackgroundTypeWallpaperInput
  | BackgroundTypePatternInput
  | BackgroundTypeSolidInput

/** A wallpaper in JPEG format */
export interface BackgroundTypeWallpaperInput {
  _: 'backgroundTypeWallpaper'
  /**
   * True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred
   * with radius 12
   */
  isBlurred?: boolean
  /** True, if the background needs to be slightly moved when device is rotated */
  isMoving?: boolean
}

/** A PNG pattern to be combined with the color chosen by the user */
export interface BackgroundTypePatternInput {
  _: 'backgroundTypePattern'
  /** True, if the background needs to be slightly moved when device is rotated */
  isMoving?: boolean
  /** Main color of the background in RGB24 format */
  color?: number
  /** Intensity of the pattern when it is shown above the main background color, 0-100 */
  intensity?: number
}

/** A solid background */
export interface BackgroundTypeSolidInput {
  _: 'backgroundTypeSolid'
  /** A color of the background in RGB24 format */
  color?: number
}
