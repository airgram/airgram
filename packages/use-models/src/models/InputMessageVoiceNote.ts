import { FormattedText, InputFileUnion } from '@airgram/core'

/** A voice note message */
export class InputMessageVoiceNoteBaseModel {
  public _: 'inputMessageVoiceNote'

  /** Voice note to be sent */
  public voiceNote: InputFileUnion

  /** Duration of the voice note, in seconds */
  public duration: number

  /** Waveform representation of the voice note, in 5-bit format */
  public waveform: string

  /**
   * Voice note caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  public caption: FormattedText
}
