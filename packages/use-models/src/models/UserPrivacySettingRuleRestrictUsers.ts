/** A rule to restrict all specified users from doing something */
export class UserPrivacySettingRuleRestrictUsersBaseModel {
  public _: 'userPrivacySettingRuleRestrictUsers'

  /** The user identifiers */
  public userIds: number[]
}
