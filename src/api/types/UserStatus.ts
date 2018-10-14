
export interface UserStatusEmpty {
  _: 'userStatusEmpty'
}

export interface UserStatusLastMonth {
  _: 'userStatusLastMonth'
}

export interface UserStatusLastWeek {
  _: 'userStatusLastWeek'
}

export interface UserStatusOffline {
  _: 'userStatusOffline'
  was_online: number
}

export interface UserStatusOnline {
  _: 'userStatusOnline'
  expires: number
}

export interface UserStatusRecently {
  _: 'userStatusRecently'
}

export type UserStatusUnion = UserStatusEmpty
  | UserStatusLastMonth
  | UserStatusLastWeek
  | UserStatusOffline
  | UserStatusOnline
  | UserStatusRecently
