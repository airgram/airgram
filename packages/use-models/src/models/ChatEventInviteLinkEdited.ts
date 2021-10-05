import { ChatInviteLink } from '@airgram/core'

/** A chat invite link was edited */
export class ChatEventInviteLinkEditedBaseModel {
  public _: 'chatEventInviteLinkEdited'

  /** Previous information about the invite link */
  public oldInviteLink: ChatInviteLink

  /** New information about the invite link */
  public newInviteLink: ChatInviteLink
}
