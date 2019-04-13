/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRuleUnion = UserPrivacySettingRuleAllowAll
  | UserPrivacySettingRuleAllowContacts
  | UserPrivacySettingRuleAllowUsers
  | UserPrivacySettingRuleRestrictAll
  | UserPrivacySettingRuleRestrictContacts
  | UserPrivacySettingRuleRestrictUsers

/** A rule to allow all users to do something */
export interface UserPrivacySettingRuleAllowAll {
  _: 'userPrivacySettingRuleAllowAll'
}

/** A rule to allow all of a user's contacts to do something */
export interface UserPrivacySettingRuleAllowContacts {
  _: 'userPrivacySettingRuleAllowContacts'
}

/** A rule to allow certain specified users to do something */
export interface UserPrivacySettingRuleAllowUsers {
  _: 'userPrivacySettingRuleAllowUsers'
  /** The user identifiers */
  userIds: number[]
}

/** A rule to restrict all users from doing something */
export interface UserPrivacySettingRuleRestrictAll {
  _: 'userPrivacySettingRuleRestrictAll'
}

/** A rule to restrict all contacts of a user from doing something */
export interface UserPrivacySettingRuleRestrictContacts {
  _: 'userPrivacySettingRuleRestrictContacts'
}

/** A rule to restrict all specified users from doing something */
export interface UserPrivacySettingRuleRestrictUsers {
  _: 'userPrivacySettingRuleRestrictUsers'
  /** The user identifiers */
  userIds: number[]
}
