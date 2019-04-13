import { Audio, FormattedText } from '../outputs'

/** An audio message */
export class MessageAudioBaseModel {
  public _: 'messageAudio'
  /** Message content */
  public audio: Audio
  /** Audio caption */
  public caption: FormattedText
}
