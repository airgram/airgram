/** Represents result of checking whether a username can be set for a chat */
export type CheckChatUsernameResultUnion = CheckChatUsernameResultOk
  | CheckChatUsernameResultUsernameInvalid
  | CheckChatUsernameResultUsernameOccupied
  | CheckChatUsernameResultPublicChatsTooMuch
  | CheckChatUsernameResultPublicGroupsUnavailable

/** The username can be set */
export interface CheckChatUsernameResultOk {
  _: 'checkChatUsernameResultOk'
}

/** The username is invalid */
export interface CheckChatUsernameResultUsernameInvalid {
  _: 'checkChatUsernameResultUsernameInvalid'
}

/** The username is occupied */
export interface CheckChatUsernameResultUsernameOccupied {
  _: 'checkChatUsernameResultUsernameOccupied'
}

/** The user has too many chats with username, one of them must be made private first */
export interface CheckChatUsernameResultPublicChatsTooMuch {
  _: 'checkChatUsernameResultPublicChatsTooMuch'
}

/** The user can't be a member of a public supergroup */
export interface CheckChatUsernameResultPublicGroupsUnavailable {
  _: 'checkChatUsernameResultPublicGroupsUnavailable'
}
