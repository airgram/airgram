/**
 * A rule to restrict all members of specified basic groups and supergroups from doing
 * something
 */
export class UserPrivacySettingRuleRestrictChatMembersBaseModel {
  public _: 'userPrivacySettingRuleRestrictChatMembers'

  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  public chatIds: number[]
}
