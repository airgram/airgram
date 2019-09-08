/** Describes the last time the user was online */
export type UserStatusUnion = UserStatusEmpty
  | UserStatusOnline
  | UserStatusOffline
  | UserStatusRecently
  | UserStatusLastWeek
  | UserStatusLastMonth

/** The user status was never changed */
export interface UserStatusEmpty {
  _: 'userStatusEmpty'
}

/** The user is online */
export interface UserStatusOnline {
  _: 'userStatusOnline'
  /** Point in time (Unix timestamp) when the user's online status will expire */
  expires: number
}

/** The user is offline */
export interface UserStatusOffline {
  _: 'userStatusOffline'
  /** Point in time (Unix timestamp) when the user was last online */
  wasOnline: number
}

/** The user was online recently */
export interface UserStatusRecently {
  _: 'userStatusRecently'
}

/** The user is offline, but was online last week */
export interface UserStatusLastWeek {
  _: 'userStatusLastWeek'
}

/** The user is offline, but was online last month */
export interface UserStatusLastMonth {
  _: 'userStatusLastMonth'
}
