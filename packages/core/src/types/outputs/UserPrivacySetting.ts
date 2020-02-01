/** Describes available user privacy settings */
export type UserPrivacySettingUnion = UserPrivacySettingShowStatus
  | UserPrivacySettingShowProfilePhoto
  | UserPrivacySettingShowLinkInForwardedMessages
  | UserPrivacySettingShowPhoneNumber
  | UserPrivacySettingAllowChatInvites
  | UserPrivacySettingAllowCalls
  | UserPrivacySettingAllowPeerToPeerCalls
  | UserPrivacySettingAllowFindingByPhoneNumber

/** A privacy setting for managing whether the user's online status is visible */
export interface UserPrivacySettingShowStatus {
  _: 'userPrivacySettingShowStatus'
}

/** A privacy setting for managing whether the user's profile photo is visible */
export interface UserPrivacySettingShowProfilePhoto {
  _: 'userPrivacySettingShowProfilePhoto'
}

/**
 * A privacy setting for managing whether a link to the user's account is included in
 * forwarded messages
 */
export interface UserPrivacySettingShowLinkInForwardedMessages {
  _: 'userPrivacySettingShowLinkInForwardedMessages'
}

/** A privacy setting for managing whether the user's phone number is visible */
export interface UserPrivacySettingShowPhoneNumber {
  _: 'userPrivacySettingShowPhoneNumber'
}

/** A privacy setting for managing whether the user can be invited to chats */
export interface UserPrivacySettingAllowChatInvites {
  _: 'userPrivacySettingAllowChatInvites'
}

/** A privacy setting for managing whether the user can be called */
export interface UserPrivacySettingAllowCalls {
  _: 'userPrivacySettingAllowCalls'
}

/** A privacy setting for managing whether peer-to-peer connections can be used for calls */
export interface UserPrivacySettingAllowPeerToPeerCalls {
  _: 'userPrivacySettingAllowPeerToPeerCalls'
}

/**
 * A privacy setting for managing whether the user can be found by their phone number.
 * Checked only if the phone number is not known to the other user. Can be set only
 * to "Allow contacts" or "Allow all"
 */
export interface UserPrivacySettingAllowFindingByPhoneNumber {
  _: 'userPrivacySettingAllowFindingByPhoneNumber'
}
