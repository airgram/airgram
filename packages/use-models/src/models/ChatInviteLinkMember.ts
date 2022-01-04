/** Describes a chat member joined a chat via an invite link */
export class ChatInviteLinkMemberBaseModel {
  public _: 'chatInviteLinkMember'

  /** User identifier */
  public userId: number

  /** Point in time (Unix timestamp) when the user joined the chat */
  public joinedChatDate: number

  /** User identifier of the chat administrator, approved user join request */
  public approverUserId: number
}
