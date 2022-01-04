export type ChatInviteLinkMemberUnion = ChatInviteLinkMember

/** Describes a chat member joined a chat via an invite link */
export interface ChatInviteLinkMember {
  _: 'chatInviteLinkMember'
  /** User identifier */
  userId: number
  /** Point in time (Unix timestamp) when the user joined the chat */
  joinedChatDate: number
  /** User identifier of the chat administrator, approved user join request */
  approverUserId: number
}
