/** Describes available user privacy settings */
export type UserPrivacySettingInputUnion = UserPrivacySettingShowStatusInput
  | UserPrivacySettingShowProfilePhotoInput
  | UserPrivacySettingShowLinkInForwardedMessagesInput
  | UserPrivacySettingShowPhoneNumberInput
  | UserPrivacySettingAllowChatInvitesInput
  | UserPrivacySettingAllowCallsInput
  | UserPrivacySettingAllowPeerToPeerCallsInput
  | UserPrivacySettingAllowFindingByPhoneNumberInput

/** A privacy setting for managing whether the user's online status is visible */
export interface UserPrivacySettingShowStatusInput {
  _: 'userPrivacySettingShowStatus'
}

/** A privacy setting for managing whether the user's profile photo is visible */
export interface UserPrivacySettingShowProfilePhotoInput {
  _: 'userPrivacySettingShowProfilePhoto'
}

/**
 * A privacy setting for managing whether a link to the user's account is included in
 * forwarded messages
 */
export interface UserPrivacySettingShowLinkInForwardedMessagesInput {
  _: 'userPrivacySettingShowLinkInForwardedMessages'
}

/** A privacy setting for managing whether the user's phone number is visible */
export interface UserPrivacySettingShowPhoneNumberInput {
  _: 'userPrivacySettingShowPhoneNumber'
}

/** A privacy setting for managing whether the user can be invited to chats */
export interface UserPrivacySettingAllowChatInvitesInput {
  _: 'userPrivacySettingAllowChatInvites'
}

/** A privacy setting for managing whether the user can be called */
export interface UserPrivacySettingAllowCallsInput {
  _: 'userPrivacySettingAllowCalls'
}

/** A privacy setting for managing whether peer-to-peer connections can be used for calls */
export interface UserPrivacySettingAllowPeerToPeerCallsInput {
  _: 'userPrivacySettingAllowPeerToPeerCalls'
}

/**
 * A privacy setting for managing whether the user can be found by their phone number.
 * Checked only if the phone number is not known to the other user. Can be set only
 * to "Allow contacts" or "Allow all"
 */
export interface UserPrivacySettingAllowFindingByPhoneNumberInput {
  _: 'userPrivacySettingAllowFindingByPhoneNumber'
}
