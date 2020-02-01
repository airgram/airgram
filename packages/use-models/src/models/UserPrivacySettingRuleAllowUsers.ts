/** A rule to allow certain specified users to do something */
export class UserPrivacySettingRuleAllowUsersBaseModel {
  public _: 'userPrivacySettingRuleAllowUsers'

  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  public userIds: number[]
}
