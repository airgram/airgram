import { Audio, RichTextUnion } from '../outputs'

/** An audio file */
export class PageBlockAudioBaseModel {
  public _: 'pageBlockAudio'
  /** Audio file; may be null */
  public audio?: Audio
  /** Audio file caption */
  public caption: RichTextUnion
}
