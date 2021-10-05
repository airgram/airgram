/** Describes a fill of a background */
export type BackgroundFillUnion = BackgroundFillSolid
  | BackgroundFillGradient
  | BackgroundFillFreeformGradient

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
   * Clockwise rotation angle of the gradient, in degrees; 0-359. Must be always divisible
   * by 45
   */
  rotationAngle: number
}

/** Describes a freeform gradient fill of a background */
export interface BackgroundFillFreeformGradient {
  _: 'backgroundFillFreeformGradient'
  /** A list of 3 or 4 colors of the freeform gradients in the RGB24 format */
  colors: number[]
}
