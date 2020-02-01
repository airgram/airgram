/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRuleUnion = UserPrivacySettingRuleAllowAll
  | UserPrivacySettingRuleAllowContacts
  | UserPrivacySettingRuleAllowUsers
  | UserPrivacySettingRuleAllowChatMembers
  | UserPrivacySettingRuleRestrictAll
  | UserPrivacySettingRuleRestrictContacts
  | UserPrivacySettingRuleRestrictUsers
  | UserPrivacySettingRuleRestrictChatMembers

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
  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  userIds: number[]
}

/**
 * A rule to allow all members of certain specified basic groups and supergroups to
 * doing something
 */
export interface UserPrivacySettingRuleAllowChatMembers {
  _: 'userPrivacySettingRuleAllowChatMembers'
  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  chatIds: number[]
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
  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  userIds: number[]
}

/**
 * A rule to restrict all members of specified basic groups and supergroups from doing
 * something
 */
export interface UserPrivacySettingRuleRestrictChatMembers {
  _: 'userPrivacySettingRuleRestrictChatMembers'
  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  chatIds: number[]
}
