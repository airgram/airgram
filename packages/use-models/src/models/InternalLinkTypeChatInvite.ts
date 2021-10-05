/**
 * The link is a chat invite link. Call checkChatInviteLink with the given invite link
 * to process the link
 */
export class InternalLinkTypeChatInviteBaseModel {
  public _: 'internalLinkTypeChatInvite'

  /** Internal representation of the invite link */
  public inviteLink: string
}
