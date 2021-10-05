export type GroupCallVideoSourceGroupUnion = GroupCallVideoSourceGroup

/** Describes a group of video synchronization source identifiers */
export interface GroupCallVideoSourceGroup {
  _: 'groupCallVideoSourceGroup'
  /** The semantics of sources, one of "SIM" or "FID" */
  semantics: string
  /** The list of synchronization source identifiers */
  sourceIds: number[]
}
