/** Describes an action suggested to the current user */
export type SuggestedActionInputUnion = SuggestedActionEnableArchiveAndMuteNewChatsInput
  | SuggestedActionCheckPhoneNumberInput

/** Suggests the user to enable "archive_and_mute_new_chats_from_unknown_users" option */
export interface SuggestedActionEnableArchiveAndMuteNewChatsInput {
  _: 'suggestedActionEnableArchiveAndMuteNewChats'
}

/**
 * Suggests the user to check authorization phone number and change the phone number
 * if it is inaccessible
 */
export interface SuggestedActionCheckPhoneNumberInput {
  _: 'suggestedActionCheckPhoneNumber'
}
