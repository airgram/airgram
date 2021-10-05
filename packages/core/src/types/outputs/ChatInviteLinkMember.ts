export type ChatInviteLinkMemberUnion = ChatInviteLinkMember

/** Describes a chat member joined a chat by an invite link */
export interface ChatInviteLinkMember {
  _: 'chatInviteLinkMember'
  /** User identifier */
  userId: number
  /** Point in time (Unix timestamp) when the user joined the chat */
  joinedChatDate: number
}
