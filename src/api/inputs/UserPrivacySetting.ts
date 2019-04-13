/** Describes available user privacy settings */
export type UserPrivacySettingInputUnion = UserPrivacySettingShowStatusInput
  | UserPrivacySettingAllowChatInvitesInput
  | UserPrivacySettingAllowCallsInput

/** A privacy setting for managing whether the user's online status is visible */
export interface UserPrivacySettingShowStatusInput {
  _: 'userPrivacySettingShowStatus'
}

/** A privacy setting for managing whether the user can be invited to chats */
export interface UserPrivacySettingAllowChatInvitesInput {
  _: 'userPrivacySettingAllowChatInvites'
}

/** A privacy setting for managing whether the user can be called */
export interface UserPrivacySettingAllowCallsInput {
  _: 'userPrivacySettingAllowCalls'
}
