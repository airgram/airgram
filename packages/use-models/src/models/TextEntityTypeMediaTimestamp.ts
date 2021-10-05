/** A media timestamp */
export class TextEntityTypeMediaTimestampBaseModel {
  public _: 'textEntityTypeMediaTimestamp'

  /**
   * Timestamp from which a video/audio/video note/voice note playing must start, in seconds.
   * The media can be in the content or the web page preview of the current message, or
   * in the same places in the replied message
   */
  public mediaTimestamp: number
}
