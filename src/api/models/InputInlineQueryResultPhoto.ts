import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents link to a JPEG image */
export class InputInlineQueryResultPhotoBaseModel {
  public _: 'inputInlineQueryResultPhoto'
  /** Unique identifier of the query result */
  public id: string
  /** Title of the result, if known */
  public title: string
  /** A short description of the result, if known */
  public description: string
  /** URL of the photo thumbnail, if it exists */
  public thumbnailUrl: string
  /** The URL of the JPEG photo (photo size must not exceed 5MB) */
  public photoUrl: string
  /** Width of the photo */
  public photoWidth: number
  /** Height of the photo */
  public photoHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
