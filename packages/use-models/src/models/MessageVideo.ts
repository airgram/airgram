import { FormattedText, Video } from '@airgram/core'

/** A video message */
export class MessageVideoBaseModel {
  public _: 'messageVideo'

  /** The video description */
  public video: Video

  /** Video caption */
  public caption: FormattedText

  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  public isSecret: boolean
}
