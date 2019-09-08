import { UserPrivacySettingRuleUnion } from './index'

export type UserPrivacySettingRulesUnion = UserPrivacySettingRules

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export interface UserPrivacySettingRules {
  _: 'userPrivacySettingRules'
  /** A list of rules */
  rules: UserPrivacySettingRuleUnion[]
}
