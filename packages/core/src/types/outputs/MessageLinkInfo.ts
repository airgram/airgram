import { Message } from './index'

export type MessageLinkInfoUnion = MessageLinkInfo

/** Contains information about a link to a message in a chat */
export interface MessageLinkInfo {
  _: 'messageLinkInfo'
  /** True, if the link is a public link for a message in a chat */
  isPublic: boolean
  /** If found, identifier of the chat to which the message belongs, 0 otherwise */
  chatId: number
  /** If found, the linked message; may be null */
  message?: Message
  /** True, if the whole media album to which the message belongs is linked */
  forAlbum: boolean
}
