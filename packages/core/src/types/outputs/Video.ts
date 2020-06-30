import { File, Minithumbnail, Thumbnail } from './index'

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
  /**
   * True, if stickers were added to the video. The list of corresponding sticker sets
   * can be received using getAttachedStickerSets
   */
  hasStickers: boolean
  /** True, if the video should be tried to be streamed */
  supportsStreaming: boolean
  /** Video minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /** Video thumbnail in JPEG or MPEG4 format; as defined by the sender; may be null */
  thumbnail?: Thumbnail
  /** File containing the video */
  video: File
}
