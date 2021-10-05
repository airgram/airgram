import { ChatInviteLink } from '@airgram/core'

/** A chat invite link was revoked */
export class ChatEventInviteLinkRevokedBaseModel {
  public _: 'chatEventInviteLinkRevoked'

  /** The invite link */
  public inviteLink: ChatInviteLink
}
