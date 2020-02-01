import { Audio, FormattedText } from '@airgram/core'

/** An audio message */
export class MessageAudioBaseModel {
  public _: 'messageAudio'

  /** The audio description */
  public audio: Audio

  /** Audio caption */
  public caption: FormattedText
}
