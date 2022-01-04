/** Describes a user that sent a join request and waits for administrator approval */
export class ChatJoinRequestBaseModel {
  public _: 'chatJoinRequest'

  /** User identifier */
  public userId: number

  /** Point in time (Unix timestamp) when the user sent the join request */
  public date: number

  /** A short bio of the user */
  public bio: string
}
