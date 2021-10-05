import { Point } from './index'

/** Represents a vector path command */
export type VectorPathCommandUnion = VectorPathCommandLine
  | VectorPathCommandCubicBezierCurve

/** A straight line to a given point */
export interface VectorPathCommandLine {
  _: 'vectorPathCommandLine'
  /** The end point of the straight line */
  endPoint: Point
}

/** A cubic Bézier curve to a given point */
export interface VectorPathCommandCubicBezierCurve {
  _: 'vectorPathCommandCubicBezierCurve'
  /** The start control point of the curve */
  startControlPoint: Point
  /** The end control point of the curve */
  endControlPoint: Point
  /** The end point of the curve */
  endPoint: Point
}
