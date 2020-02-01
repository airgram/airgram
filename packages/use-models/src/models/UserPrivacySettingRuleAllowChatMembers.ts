/**
 * A rule to allow all members of certain specified basic groups and supergroups to
 * doing something
 */
export class UserPrivacySettingRuleAllowChatMembersBaseModel {
  public _: 'userPrivacySettingRuleAllowChatMembers'

  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  public chatIds: number[]
}
