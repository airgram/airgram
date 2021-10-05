import { ChatInviteLinkMember } from './index'

export type ChatInviteLinkMembersUnion = ChatInviteLinkMembers

/** Contains a list of chat members joined a chat by an invite link */
export interface ChatInviteLinkMembers {
  _: 'chatInviteLinkMembers'
  /** Approximate total count of chat members found */
  totalCount: number
  /** List of chat members, joined a chat by an invite link */
  members: ChatInviteLinkMember[]
}
