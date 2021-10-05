export type PointUnion = Point

/** A point on a Cartesian plane */
export interface Point {
  _: 'point'
  /** The point's first coordinate */
  x: number
  /** The point's second coordinate */
  y: number
}
