/** A PNG pattern to be combined with the color chosen by the user */
export class BackgroundTypePatternBaseModel {
  public _: 'backgroundTypePattern'

  /** True, if the background needs to be slightly moved when device is rotated */
  public isMoving: boolean

  /** Main color of the background in RGB24 format */
  public color: number

  /** Intensity of the pattern when it is shown above the main background color, 0-100 */
  public intensity: number
}
