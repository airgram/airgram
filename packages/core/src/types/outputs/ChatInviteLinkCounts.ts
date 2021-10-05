import { ChatInviteLinkCount } from './index'

export type ChatInviteLinkCountsUnion = ChatInviteLinkCounts

/** Contains a list of chat invite link counts */
export interface ChatInviteLinkCounts {
  _: 'chatInviteLinkCounts'
  /** List of invite linkcounts */
  inviteLinkCounts: ChatInviteLinkCount[]
}
