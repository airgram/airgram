import { Message } from '@airgram/core'

/** Contains information about a link to a message in a chat */
export class MessageLinkInfoBaseModel {
  public _: 'messageLinkInfo'

  /** True, if the link is a public link for a message in a chat */
  public isPublic: boolean

  /** If found, identifier of the chat to which the message belongs, 0 otherwise */
  public chatId: number

  /** If found, the linked message; may be null */
  public message?: Message

  /** True, if the whole media album to which the message belongs is linked */
  public forAlbum: boolean
}
