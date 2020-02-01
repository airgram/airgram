/** A rule to restrict all specified users from doing something */
export class UserPrivacySettingRuleRestrictUsersBaseModel {
  public _: 'userPrivacySettingRuleRestrictUsers'

  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  public userIds: number[]
}
