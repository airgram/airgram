export type UsersUnion = Users

/** Represents a list of users */
export interface Users {
  _: 'users'
  /** Approximate total count of users found */
  totalCount: number
  /** A list of user identifiers */
  userIds: number[]
}
