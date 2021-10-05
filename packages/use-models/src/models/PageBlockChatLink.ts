import { ChatPhotoInfo } from '@airgram/core'

/** A link to a chat */
export class PageBlockChatLinkBaseModel {
  public _: 'pageBlockChatLink'

  /** Chat title */
  public title: string

  /** Chat photo; may be null */
  public photo?: ChatPhotoInfo

  /** Chat username, by which all other information about the chat can be resolved */
  public username: string
}
