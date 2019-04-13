/** The user is online */
export class UserStatusOnlineBaseModel {
  public _: 'userStatusOnline'
  /** Point in time (Unix timestamp) when the user's online status will expire */
  public expires: number
}
