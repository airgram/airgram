import { FormattedText, InputFileUnion, InputThumbnail } from '@airgram/core'

/** An audio message */
export class InputMessageAudioBaseModel {
  public _: 'inputMessageAudio'

  /** Audio file to be sent */
  public audio: InputFileUnion

  /** Thumbnail of the cover for the album, if available */
  public albumCoverThumbnail: InputThumbnail

  /** Duration of the audio, in seconds; may be replaced by the server */
  public duration: number

  /** Title of the audio; 0-64 characters; may be replaced by the server */
  public title: string

  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  public performer: string

  /** Audio caption; 0-GetOption("message_caption_length_max") characters */
  public caption: FormattedText
}
