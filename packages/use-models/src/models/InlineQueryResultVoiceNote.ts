import { VoiceNote } from '@airgram/core'

/** Represents a voice note */
export class InlineQueryResultVoiceNoteBaseModel {
  public _: 'inlineQueryResultVoiceNote'

  /** Unique identifier of the query result */
  public id: string

  /** Voice note */
  public voiceNote: VoiceNote

  /** Title of the voice note */
  public title: string
}
