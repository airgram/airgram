import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a link to a page containing an embedded video player or a video file */
export class InputInlineQueryResultVideoBaseModel {
  public _: 'inputInlineQueryResultVideo'
  /** Unique identifier of the query result */
  public id: string
  /** Title of the result */
  public title: string
  /** A short description of the result, if known */
  public description: string
  /** The URL of the video thumbnail (JPEG), if it exists */
  public thumbnailUrl: string
  /** URL of the embedded video player or video file */
  public videoUrl: string
  /**
   * MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently
   * supported
   */
  public mimeType: string
  /** Width of the video */
  public videoWidth: number
  /** Height of the video */
  public videoHeight: number
  /** Video duration, in seconds */
  public videoDuration: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
