import { ChatMember } from './index'

export type ChatMembersUnion = ChatMembers

/** Contains a list of chat members */
export interface ChatMembers {
  _: 'chatMembers'
  /** Approximate total count of chat members found */
  totalCount: number
  /** A list of chat members */
  members: ChatMember[]
}
