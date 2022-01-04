import { BackgroundFillInputUnion } from './index'

/** Describes the type of a background */
export type BackgroundTypeInputUnion = BackgroundTypeWallpaperInput
  | BackgroundTypePatternInput
  | BackgroundTypeFillInput

/** A wallpaper in JPEG format */
export interface BackgroundTypeWallpaperInput {
  _: 'backgroundTypeWallpaper'
  /**
   * True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred
   * with radius 12
   */
  isBlurred?: boolean
  /** True, if the background needs to be slightly moved when device is tilted */
  isMoving?: boolean
}

/**
 * A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern")
 * pattern to be combined with the background fill chosen by the user
 */
export interface BackgroundTypePatternInput {
  _: 'backgroundTypePattern'
  /** Fill of the background */
  fill?: BackgroundFillInputUnion
  /** Intensity of the pattern when it is shown above the filled background; 0-100. */
  intensity?: number
  /**
   * True, if the background fill must be applied only to the pattern itself. All other
   * pixels are black in this case. For dark themes only
   */
  isInverted?: boolean
  /** True, if the background needs to be slightly moved when device is tilted */
  isMoving?: boolean
}

/** A filled background */
export interface BackgroundTypeFillInput {
  _: 'backgroundTypeFill'
  /** The background fill */
  fill?: BackgroundFillInputUnion
}
