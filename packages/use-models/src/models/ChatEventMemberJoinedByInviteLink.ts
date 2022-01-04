import { ChatInviteLink } from '@airgram/core'

/** A new member joined the chat via an invite link */
export class ChatEventMemberJoinedByInviteLinkBaseModel {
  public _: 'chatEventMemberJoinedByInviteLink'

  /** Invite link used to join the chat */
  public inviteLink: ChatInviteLink
}
