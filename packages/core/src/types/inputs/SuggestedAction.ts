/** Describes an action suggested to the current user */
export type SuggestedActionInputUnion = SuggestedActionEnableArchiveAndMuteNewChatsInput
  | SuggestedActionCheckPasswordInput
  | SuggestedActionCheckPhoneNumberInput
  | SuggestedActionViewChecksHintInput
  | SuggestedActionConvertToBroadcastGroupInput
  | SuggestedActionSetPasswordInput

/** Suggests the user to enable "archive_and_mute_new_chats_from_unknown_users" option */
export interface SuggestedActionEnableArchiveAndMuteNewChatsInput {
  _: 'suggestedActionEnableArchiveAndMuteNewChats'
}

/**
 * Suggests the user to check whether they still remember their 2-step verification
 * password
 */
export interface SuggestedActionCheckPasswordInput {
  _: 'suggestedActionCheckPassword'
}

/**
 * Suggests the user to check whether authorization phone number is correct and change
 * the phone number if it is inaccessible
 */
export interface SuggestedActionCheckPhoneNumberInput {
  _: 'suggestedActionCheckPhoneNumber'
}

/**
 * Suggests the user to view a hint about the meaning of one and two check marks on
 * sent messages
 */
export interface SuggestedActionViewChecksHintInput {
  _: 'suggestedActionViewChecksHint'
}

/** Suggests the user to convert specified supergroup to a broadcast group */
export interface SuggestedActionConvertToBroadcastGroupInput {
  _: 'suggestedActionConvertToBroadcastGroup'
  /** Supergroup identifier */
  supergroupId?: number
}

/** Suggests the user to set a 2-step verification password to be able to log in again */
export interface SuggestedActionSetPasswordInput {
  _: 'suggestedActionSetPassword'
  /**
   * The number of days to pass between consecutive authorizations if the user declines
   * to set password
   */
  authorizationDelay?: number
}
