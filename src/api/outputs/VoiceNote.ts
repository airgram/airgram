import { File } from './index'

export type VoiceNoteUnion = VoiceNote

/**
 * Describes a voice note. The voice note must be encoded with the Opus codec, and stored
 * inside an OGG container. Voice notes can have only a single audio channel
 */
export interface VoiceNote {
  _: 'voiceNote'
  /** Duration of the voice note, in seconds; as defined by the sender */
  duration: number
  /** A waveform representation of the voice note in 5-bit format */
  waveform: string
  /** MIME type of the file; as defined by the sender */
  mimeType: string
  /** File containing the voice note */
  voice: File
}
