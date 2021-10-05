export type ChatInviteLinkMemberInputUnion = ChatInviteLinkMemberInput

/** Describes a chat member joined a chat by an invite link */
export interface ChatInviteLinkMemberInput {
  _: 'chatInviteLinkMember'
  /** User identifier */
  userId?: number
  /** Point in time (Unix timestamp) when the user joined the chat */
  joinedChatDate?: number
}
