/** Describes an action suggested to the current user */
export type SuggestedActionInputUnion = SuggestedActionEnableArchiveAndMuteNewChatsInput
  | SuggestedActionCheckPasswordInput
  | SuggestedActionCheckPhoneNumberInput
  | SuggestedActionSeeTicksHintInput
  | SuggestedActionConvertToBroadcastGroupInput

/** Suggests the user to enable "archive_and_mute_new_chats_from_unknown_users" option */
export interface SuggestedActionEnableArchiveAndMuteNewChatsInput {
  _: 'suggestedActionEnableArchiveAndMuteNewChats'
}

/** Suggests the user to check whether 2-step verification password is still remembered */
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

/** Suggests the user to see a hint about meaning of one and two ticks on sent message */
export interface SuggestedActionSeeTicksHintInput {
  _: 'suggestedActionSeeTicksHint'
}

/** Suggests the user to convert specified supergroup to a broadcast group */
export interface SuggestedActionConvertToBroadcastGroupInput {
  _: 'suggestedActionConvertToBroadcastGroup'
  /** Supergroup identifier */
  supergroupId?: number
}
