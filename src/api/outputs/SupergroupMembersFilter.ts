/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilterUnion = SupergroupMembersFilterRecent
  | SupergroupMembersFilterAdministrators
  | SupergroupMembersFilterSearch
  | SupergroupMembersFilterRestricted
  | SupergroupMembersFilterBanned
  | SupergroupMembersFilterBots

/** Returns recently active users in reverse chronological order */
export interface SupergroupMembersFilterRecent {
  _: 'supergroupMembersFilterRecent'
}

/** Returns the creator and administrators */
export interface SupergroupMembersFilterAdministrators {
  _: 'supergroupMembersFilterAdministrators'
}

/** Used to search for supergroup or channel members via a (string) query */
export interface SupergroupMembersFilterSearch {
  _: 'supergroupMembersFilterSearch'
  /** Query to search for */
  query: string
}

/** Returns restricted supergroup members; can be used only by administrators */
export interface SupergroupMembersFilterRestricted {
  _: 'supergroupMembersFilterRestricted'
  /** Query to search for */
  query: string
}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export interface SupergroupMembersFilterBanned {
  _: 'supergroupMembersFilterBanned'
  /** Query to search for */
  query: string
}

/** Returns bot members of the supergroup or channel */
export interface SupergroupMembersFilterBots {
  _: 'supergroupMembersFilterBots'
}
