/** Describes a gradient fill of a background */
export class BackgroundFillGradientBaseModel {
  public _: 'backgroundFillGradient'

  /** A top color of the background in the RGB24 format */
  public topColor: number

  /** A bottom color of the background in the RGB24 format */
  public bottomColor: number

  /**
   * Clockwise rotation angle of the gradient, in degrees; 0-359. Should be always divisible
   * by 45
   */
  public rotationAngle: number
}
