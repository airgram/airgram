import { ChatInviteLink } from '@airgram/core'

/** A new member was accepted to the chat by an administrator */
export class ChatEventMemberJoinedByRequestBaseModel {
  public _: 'chatEventMemberJoinedByRequest'

  /** User identifier of the chat administrator, approved user join request */
  public approverUserId: number

  /** Invite link used to join the chat; may be null */
  public inviteLink?: ChatInviteLink
}
