import {
  InputMessageContentUnion,
  Location,
  ReplyMarkupUnion
} from '../outputs'

/** Represents a point on the map */
export class InputInlineQueryResultLocationBaseModel {
  public _: 'inputInlineQueryResultLocation'
  /** Unique identifier of the query result */
  public id: string
  /** Location result */
  public location: Location
  /**
   * Amount of time relative to the message sent time until the location can be updated,
   * in seconds
   */
  public livePeriod: number
  /** Title of the result */
  public title: string
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
