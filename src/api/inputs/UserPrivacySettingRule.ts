/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRuleInputUnion = UserPrivacySettingRuleAllowAllInput
  | UserPrivacySettingRuleAllowContactsInput
  | UserPrivacySettingRuleAllowUsersInput
  | UserPrivacySettingRuleRestrictAllInput
  | UserPrivacySettingRuleRestrictContactsInput
  | UserPrivacySettingRuleRestrictUsersInput

/** A rule to allow all users to do something */
export interface UserPrivacySettingRuleAllowAllInput {
  _: 'userPrivacySettingRuleAllowAll'
}

/** A rule to allow all of a user's contacts to do something */
export interface UserPrivacySettingRuleAllowContactsInput {
  _: 'userPrivacySettingRuleAllowContacts'
}

/** A rule to allow certain specified users to do something */
export interface UserPrivacySettingRuleAllowUsersInput {
  _: 'userPrivacySettingRuleAllowUsers'
  /** The user identifiers */
  userIds?: number[]
}

/** A rule to restrict all users from doing something */
export interface UserPrivacySettingRuleRestrictAllInput {
  _: 'userPrivacySettingRuleRestrictAll'
}

/** A rule to restrict all contacts of a user from doing something */
export interface UserPrivacySettingRuleRestrictContactsInput {
  _: 'userPrivacySettingRuleRestrictContacts'
}

/** A rule to restrict all specified users from doing something */
export interface UserPrivacySettingRuleRestrictUsersInput {
  _: 'userPrivacySettingRuleRestrictUsers'
  /** The user identifiers */
  userIds?: number[]
}
