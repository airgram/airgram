/** Describes an available stream in a group call */
export class GroupCallStreamBaseModel {
  public _: 'groupCallStream'

  /** Identifier of an audio/video channel */
  public channelId: number

  /** Scale of segment durations in the stream. The duration is 1000/(2**scale) milliseconds */
  public scale: number

  /** Point in time when the stream currently ends; Unix timestamp in milliseconds */
  public timeOffset: number
}
