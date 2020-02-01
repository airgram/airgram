import { ChatPhoto, ChatTypeUnion } from './index'

export type ChatInviteLinkInfoUnion = ChatInviteLinkInfo

/** Contains information about a chat invite link */
export interface ChatInviteLinkInfo {
  _: 'chatInviteLinkInfo'
  /** Chat identifier of the invite link; 0 if the user is not a member of this chat */
  chatId: number
  /** Contains information about the type of the chat */
  type: ChatTypeUnion
  /** Title of the chat */
  title: string
  /** Chat photo; may be null */
  photo?: ChatPhoto
  /** Number of members */
  memberCount: number
  /** User identifiers of some chat members that may be known to the current user */
  memberUserIds: number[]
  /**
   * True, if the chat is a public supergroup or channel, i.e. it has a username or it
   * is a location-based supergroup
   */
  isPublic: boolean
}
