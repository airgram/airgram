import { UserPrivacySettingRuleUnion } from '@airgram/core'

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export class UserPrivacySettingRulesBaseModel {
  public _: 'userPrivacySettingRules'

  /** A list of rules */
  public rules: UserPrivacySettingRuleUnion[]
}
