/** Describes an action suggested to the current user */
export type SuggestedActionUnion = SuggestedActionEnableArchiveAndMuteNewChats
  | SuggestedActionCheckPassword
  | SuggestedActionCheckPhoneNumber
  | SuggestedActionSeeTicksHint
  | SuggestedActionConvertToBroadcastGroup

/** Suggests the user to enable "archive_and_mute_new_chats_from_unknown_users" option */
export interface SuggestedActionEnableArchiveAndMuteNewChats {
  _: 'suggestedActionEnableArchiveAndMuteNewChats'
}

/** Suggests the user to check whether 2-step verification password is still remembered */
export interface SuggestedActionCheckPassword {
  _: 'suggestedActionCheckPassword'
}

/**
 * Suggests the user to check whether authorization phone number is correct and change
 * the phone number if it is inaccessible
 */
export interface SuggestedActionCheckPhoneNumber {
  _: 'suggestedActionCheckPhoneNumber'
}

/** Suggests the user to see a hint about meaning of one and two ticks on sent message */
export interface SuggestedActionSeeTicksHint {
  _: 'suggestedActionSeeTicksHint'
}

/** Suggests the user to convert specified supergroup to a broadcast group */
export interface SuggestedActionConvertToBroadcastGroup {
  _: 'suggestedActionConvertToBroadcastGroup'
  /** Supergroup identifier */
  supergroupId: number
}
