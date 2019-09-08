/** Represents a list of users */
export class UsersBaseModel {
  public _: 'users'

  /** Approximate total count of users found */
  public totalCount: number

  /** A list of user identifiers */
  public userIds: number[]
}
