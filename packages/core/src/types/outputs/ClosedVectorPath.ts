import { VectorPathCommandUnion } from './index'

export type ClosedVectorPathUnion = ClosedVectorPath

/** Represents a closed vector path. The path begins at the end point of the last command */
export interface ClosedVectorPath {
  _: 'closedVectorPath'
  /** List of vector path commands */
  commands: VectorPathCommandUnion[]
}
