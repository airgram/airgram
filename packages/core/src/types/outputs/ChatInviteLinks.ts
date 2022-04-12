import { ChatInviteLink } from './index'

export type ChatInviteLinksUnion = ChatInviteLinks

/** Contains a list of chat invite links */
export interface ChatInviteLinks {
  _: 'chatInviteLinks'
  /** Approximate total number of chat invite links found */
  totalCount: number
  /** List of invite links */
  inviteLinks: ChatInviteLink[]
}
