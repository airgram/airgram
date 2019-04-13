import { FormattedText, Video } from '../outputs'

/** A video message */
export class MessageVideoBaseModel {
  public _: 'messageVideo'
  /** Message content */
  public video: Video
  /** Video caption */
  public caption: FormattedText
  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  public isSecret: boolean
}
