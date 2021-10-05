import { ChatInviteLinkCount } from '@airgram/core'

/** Contains a list of chat invite link counts */
export class ChatInviteLinkCountsBaseModel {
  public _: 'chatInviteLinkCounts'

  /** List of invite linkcounts */
  public inviteLinkCounts: ChatInviteLinkCount[]
}
