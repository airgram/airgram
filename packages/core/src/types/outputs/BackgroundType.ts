import { BackgroundFillUnion } from './index'

/** Describes the type of a background */
export type BackgroundTypeUnion = BackgroundTypeWallpaper
  | BackgroundTypePattern
  | BackgroundTypeFill

/** A wallpaper in JPEG format */
export interface BackgroundTypeWallpaper {
  _: 'backgroundTypeWallpaper'
  /**
   * True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred
   * with radius 12
   */
  isBlurred: boolean
  /** True, if the background needs to be slightly moved when device is tilted */
  isMoving: boolean
}

/**
 * A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern")
 * pattern to be combined with the background fill chosen by the user
 */
export interface BackgroundTypePattern {
  _: 'backgroundTypePattern'
  /** Description of the background fill */
  fill: BackgroundFillUnion
  /** Intensity of the pattern when it is shown above the filled background, 0-100 */
  intensity: number
  /** True, if the background needs to be slightly moved when device is tilted */
  isMoving: boolean
}

/** A filled background */
export interface BackgroundTypeFill {
  _: 'backgroundTypeFill'
  /** Description of the background fill */
  fill: BackgroundFillUnion
}
