/** Returns restricted supergroup members; can be used only by administrators */
export class SupergroupMembersFilterRestrictedBaseModel {
  public _: 'supergroupMembersFilterRestricted'
  /** Query to search for */
  public query: string
}
