import { PrivacyRuleUnion } from './PrivacyRule'
import { UserUnion } from './User'

export interface AccountPrivacyRules {
  _: 'account.privacyRules'
  rules: PrivacyRuleUnion[]
  users: UserUnion[]
}

export type AccountPrivacyRulesUnion = AccountPrivacyRules
