import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/**
 * Represents a link to an opus-encoded audio file within an OGG container, single channel
 * audio
 */
export class InputInlineQueryResultVoiceNoteBaseModel {
  public _: 'inputInlineQueryResultVoiceNote'
  /** Unique identifier of the query result */
  public id: string
  /** Title of the voice note */
  public title: string
  /** The URL of the voice note file */
  public voiceNoteUrl: string
  /** Duration of the voice note, in seconds */
  public voiceNoteDuration: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
