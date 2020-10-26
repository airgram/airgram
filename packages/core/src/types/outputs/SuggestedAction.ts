/** Describes an action suggested to the current user */
export type SuggestedActionUnion = SuggestedActionEnableArchiveAndMuteNewChats
  | SuggestedActionCheckPhoneNumber

/** Suggests the user to enable "archive_and_mute_new_chats_from_unknown_users" option */
export interface SuggestedActionEnableArchiveAndMuteNewChats {
  _: 'suggestedActionEnableArchiveAndMuteNewChats'
}

/**
 * Suggests the user to check authorization phone number and change the phone number
 * if it is inaccessible
 */
export interface SuggestedActionCheckPhoneNumber {
  _: 'suggestedActionCheckPhoneNumber'
}
