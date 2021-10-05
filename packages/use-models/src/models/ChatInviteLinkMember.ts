/** Describes a chat member joined a chat by an invite link */
export class ChatInviteLinkMemberBaseModel {
  public _: 'chatInviteLinkMember'

  /** User identifier */
  public userId: number

  /** Point in time (Unix timestamp) when the user joined the chat */
  public joinedChatDate: number
}
