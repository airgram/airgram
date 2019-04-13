import { Contact, InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a user contact */
export class InputInlineQueryResultContactBaseModel {
  public _: 'inputInlineQueryResultContact'
  /** Unique identifier of the query result */
  public id: string
  /** User contact */
  public contact: Contact
  /** URL of the result thumbnail, if it exists */
  public thumbnailUrl: string
  /** Thumbnail width, if known */
  public thumbnailWidth: number
  /** Thumbnail height, if known */
  public thumbnailHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
