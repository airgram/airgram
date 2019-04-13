import { UserPrivacySettingRuleInputUnion } from './index'

export type UserPrivacySettingRulesInputUnion = UserPrivacySettingRulesInput

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export interface UserPrivacySettingRulesInput {
  _: 'userPrivacySettingRules'
  /** A list of rules */
  rules?: UserPrivacySettingRuleInputUnion[]
}
