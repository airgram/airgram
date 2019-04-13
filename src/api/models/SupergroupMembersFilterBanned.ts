/** Returns users banned from the supergroup or channel; can be used only by administrators */
export class SupergroupMembersFilterBannedBaseModel {
  public _: 'supergroupMembersFilterBanned'
  /** Query to search for */
  public query: string
}
