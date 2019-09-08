/** The user is offline */
export class UserStatusOfflineBaseModel {
  public _: 'userStatusOffline'

  /** Point in time (Unix timestamp) when the user was last online */
  public wasOnline: number
}
