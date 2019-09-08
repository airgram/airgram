/** Describes available user privacy settings */
export type UserPrivacySettingInputUnion = UserPrivacySettingShowStatusInput
  | UserPrivacySettingShowProfilePhotoInput
  | UserPrivacySettingShowLinkInForwardedMessagesInput
  | UserPrivacySettingAllowChatInvitesInput
  | UserPrivacySettingAllowCallsInput
  | UserPrivacySettingAllowPeerToPeerCallsInput

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
