export type GroupCallStreamUnion = GroupCallStream

/** Describes an available stream in a group call */
export interface GroupCallStream {
  _: 'groupCallStream'
  /** Identifier of an audio/video channel */
  channelId: number
  /** Scale of segment durations in the stream. The duration is 1000/(2**scale) milliseconds */
  scale: number
  /** Point in time when the stream currently ends; Unix timestamp in milliseconds */
  timeOffset: number
}
