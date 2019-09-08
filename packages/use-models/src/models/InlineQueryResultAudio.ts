import { Audio } from '@airgram/core'

/** Represents an audio file */
export class InlineQueryResultAudioBaseModel {
  public _: 'inlineQueryResultAudio'

  /** Unique identifier of the query result */
  public id: string

  /** Audio file */
  public audio: Audio
}
