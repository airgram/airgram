import { File } from '../outputs'

/**
 * Describes a voice note. The voice note must be encoded with the Opus codec, and stored
 * inside an OGG container. Voice notes can have only a single audio channel
 */
export class VoiceNoteBaseModel {
  public _: 'voiceNote'
  /** Duration of the voice note, in seconds; as defined by the sender */
  public duration: number
  /** A waveform representation of the voice note in 5-bit format */
  public waveform: string
  /** MIME type of the file; as defined by the sender */
  public mimeType: string
  /** File containing the voice note */
  public voice: File
}
