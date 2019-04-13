import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a link to an article or web page */
export class InputInlineQueryResultArticleBaseModel {
  public _: 'inputInlineQueryResultArticle'
  /** Unique identifier of the query result */
  public id: string
  /** URL of the result, if it exists */
  public url: string
  /** True, if the URL must be not shown */
  public hideUrl: boolean
  /** Title of the result */
  public title: string
  /** A short description of the result */
  public description: string
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
