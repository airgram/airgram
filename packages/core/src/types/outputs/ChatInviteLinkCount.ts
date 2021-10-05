export type ChatInviteLinkCountUnion = ChatInviteLinkCount

/** Describes a chat administrator with a number of active and revoked chat invite links */
export interface ChatInviteLinkCount {
  _: 'chatInviteLinkCount'
  /** Administrator's user identifier */
  userId: number
  /** Number of active invite links */
  inviteLinkCount: number
  /** Number of revoked invite links */
  revokedInviteLinkCount: number
}
