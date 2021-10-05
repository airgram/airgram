import { ChatInviteLink } from '@airgram/core'

/** A revoked chat invite link was deleted */
export class ChatEventInviteLinkDeletedBaseModel {
  public _: 'chatEventInviteLinkDeleted'

  /** The invite link */
  public inviteLink: ChatInviteLink
}
