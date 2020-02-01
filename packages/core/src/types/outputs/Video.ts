import { File, Minithumbnail, PhotoSize } from './index'

export type VideoUnion = Video

/** Describes a video file */
export interface Video {
  _: 'video'
  /** Duration of the video, in seconds; as defined by the sender */
  duration: number
  /** Video width; as defined by the sender */
  width: number
  /** Video height; as defined by the sender */
  height: number
  /** Original name of the file; as defined by the sender */
  fileName: string
  /** MIME type of the file; as defined by the sender */
  mimeType: string
  /** True, if stickers were added to the video */
  hasStickers: boolean
  /** True, if the video should be tried to be streamed */
  supportsStreaming: boolean
  /** Video minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail?: PhotoSize
  /** File containing the video */
  video: File
}
