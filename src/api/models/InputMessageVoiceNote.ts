import { FormattedText, InputFileUnion } from '../outputs'

/** A voice note message */
export class InputMessageVoiceNoteBaseModel {
  public _: 'inputMessageVoiceNote'
  /** Voice note to be sent */
  public voiceNote: InputFileUnion
  /** Duration of the voice note, in seconds */
  public duration: number
  /** Waveform representation of the voice note, in 5-bit format */
  public waveform: string
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  public caption: FormattedText
}
