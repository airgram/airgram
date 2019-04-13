import { ChatPhoto } from '../outputs'

/** A link to a chat */
export class PageBlockChatLinkBaseModel {
  public _: 'pageBlockChatLink'
  /** Chat title */
  public title: string
  /** Chat photo; may be null */
  public photo?: ChatPhoto
  /** Chat username, by which all other information about the chat should be resolved */
  public username: string
}
