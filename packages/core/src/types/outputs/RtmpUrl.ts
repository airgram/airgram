export type RtmpUrlUnion = RtmpUrl

/** Represents an RTMP url */
export interface RtmpUrl {
  _: 'rtmpUrl'
  /** The URL */
  url: string
  /** Stream key */
  streamKey: string
}
