import { Point } from '@airgram/core'

/** A cubic Bézier curve to a given point */
export class VectorPathCommandCubicBezierCurveBaseModel {
  public _: 'vectorPathCommandCubicBezierCurve'

  /** The start control point of the curve */
  public startControlPoint: Point

  /** The end control point of the curve */
  public endControlPoint: Point

  /** The end point of the curve */
  public endPoint: Point
}
