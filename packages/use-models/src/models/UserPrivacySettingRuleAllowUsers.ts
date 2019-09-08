/** A rule to allow certain specified users to do something */
export class UserPrivacySettingRuleAllowUsersBaseModel {
  public _: 'userPrivacySettingRuleAllowUsers'

  /** The user identifiers */
  public userIds: number[]
}
