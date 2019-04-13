import { InputMessageContentUnion, ReplyMarkupUnion } from '../outputs'

/** Represents a link to an MP3 audio file */
export class InputInlineQueryResultAudioBaseModel {
  public _: 'inputInlineQueryResultAudio'
  /** Unique identifier of the query result */
  public id: string
  /** Title of the audio file */
  public title: string
  /** Performer of the audio file */
  public performer: string
  /** The URL of the audio file */
  public audioUrl: string
  /** Audio file duration, in seconds */
  public audioDuration: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  public inputMessageContent: InputMessageContentUnion
}
