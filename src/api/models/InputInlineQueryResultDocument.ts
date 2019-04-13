import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a link to a file */
export class InputInlineQueryResultDocumentBaseModel {
  public _: 'inputInlineQueryResultDocument'
  /** Unique identifier of the query result */
  public id: string
  /** Title of the resulting file */
  public title: string
  /** Short description of the result, if known */
  public description: string
  /** URL of the file */
  public documentUrl: string
  /**
   * MIME type of the file content; only "application/pdf" and "application/zip" are currently
   * allowed
   */
  public mimeType: string
  /** The URL of the file thumbnail, if it exists */
  public thumbnailUrl: string
  /** Width of the thumbnail */
  public thumbnailWidth: number
  /** Height of the thumbnail */
  public thumbnailHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
