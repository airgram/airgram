import { ChatInviteLinkMember } from './index'

export type ChatInviteLinkMembersUnion = ChatInviteLinkMembers

/** Contains a list of chat members joined a chat via an invite link */
export interface ChatInviteLinkMembers {
  _: 'chatInviteLinkMembers'
  /** Approximate total number of chat members found */
  totalCount: number
  /** List of chat members, joined a chat via an invite link */
  members: ChatInviteLinkMember[]
}
