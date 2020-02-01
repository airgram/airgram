/** Describes a fill of a background */
export type BackgroundFillUnion = BackgroundFillSolid | BackgroundFillGradient

/** Describes a solid fill of a background */
export interface BackgroundFillSolid {
  _: 'backgroundFillSolid'
  /** A color of the background in the RGB24 format */
  color: number
}

/** Describes a gradient fill of a background */
export interface BackgroundFillGradient {
  _: 'backgroundFillGradient'
  /** A top color of the background in the RGB24 format */
  topColor: number
  /** A bottom color of the background in the RGB24 format */
  bottomColor: number
  /**
   * Clockwise rotation angle of the gradient, in degrees; 0-359. Should be always divisible
   * by 45
   */
  rotationAngle: number
}
