import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a link to an animated (i.e. without sound) H.264/MPEG-4 AVC video */
export class InputInlineQueryResultAnimatedMpeg4BaseModel {
  public _: 'inputInlineQueryResultAnimatedMpeg4'
  /** Unique identifier of the query result */
  public id: string
  /** Title of the result */
  public title: string
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  public thumbnailUrl: string
  /** The URL of the MPEG4-file (file size must not exceed 1MB) */
  public mpeg4Url: string
  /** Duration of the video, in seconds */
  public mpeg4Duration: number
  /** Width of the video */
  public mpeg4Width: number
  /** Height of the video */
  public mpeg4Height: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
