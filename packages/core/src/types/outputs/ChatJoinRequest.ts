export type ChatJoinRequestUnion = ChatJoinRequest

/** Describes a user that sent a join request and waits for administrator approval */
export interface ChatJoinRequest {
  _: 'chatJoinRequest'
  /** User identifier */
  userId: number
  /** Point in time (Unix timestamp) when the user sent the join request */
  date: number
  /** A short bio of the user */
  bio: string
}
