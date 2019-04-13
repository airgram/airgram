import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a link to an animated GIF */
export class InputInlineQueryResultAnimatedGifBaseModel {
  public _: 'inputInlineQueryResultAnimatedGif'
  /** Unique identifier of the query result */
  public id: string
  /** Title of the query result */
  public title: string
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  public thumbnailUrl: string
  /** The URL of the GIF-file (file size must not exceed 1MB) */
  public gifUrl: string
  /** Duration of the GIF, in seconds */
  public gifDuration: number
  /** Width of the GIF */
  public gifWidth: number
  /** Height of the GIF */
  public gifHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
