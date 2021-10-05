/** Describes a group of video synchronization source identifiers */
export class GroupCallVideoSourceGroupBaseModel {
  public _: 'groupCallVideoSourceGroup'

  /** The semantics of sources, one of "SIM" or "FID" */
  public semantics: string

  /** The list of synchronization source identifiers */
  public sourceIds: number[]
}
