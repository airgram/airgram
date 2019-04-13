import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a link to a WEBP sticker */
export class InputInlineQueryResultStickerBaseModel {
  public _: 'inputInlineQueryResultSticker'
  /** Unique identifier of the query result */
  public id: string
  /** URL of the sticker thumbnail, if it exists */
  public thumbnailUrl: string
  /** The URL of the WEBP sticker (sticker file size must not exceed 5MB) */
  public stickerUrl: string
  /** Width of the sticker */
  public stickerWidth: number
  /** Height of the sticker */
  public stickerHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
