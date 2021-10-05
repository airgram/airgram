import { Point } from '@airgram/core'

/** A straight line to a given point */
export class VectorPathCommandLineBaseModel {
  public _: 'vectorPathCommandLine'

  /** The end point of the straight line */
  public endPoint: Point
}
