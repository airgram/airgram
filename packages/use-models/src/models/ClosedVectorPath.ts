import { VectorPathCommandUnion } from '@airgram/core'

/** Represents a closed vector path. The path begins at the end point of the last command */
export class ClosedVectorPathBaseModel {
  public _: 'closedVectorPath'

  /** List of vector path commands */
  public commands: VectorPathCommandUnion[]
}
