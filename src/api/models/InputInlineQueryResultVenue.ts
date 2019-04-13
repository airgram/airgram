import { InputMessageContentUnion, ReplyMarkupUnion, Venue } from '../outputs'

/** Represents information about a venue */
export class InputInlineQueryResultVenueBaseModel {
  public _: 'inputInlineQueryResultVenue'
  /** Unique identifier of the query result */
  public id: string
  /** Venue result */
  public venue: Venue
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
