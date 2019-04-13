import { File, PhotoSize } from './index'

export type VideoNoteUnion = VideoNote

/**
 * Describes a video note. The video must be equal in width and height, cropped to a
 * circle, and stored in MPEG4 format
 */
export interface VideoNote {
  _: 'videoNote'
  /** Duration of the video, in seconds; as defined by the sender */
  duration: number
  /** Video width and height; as defined by the sender */
  length: number
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail?: PhotoSize
  /** File containing the video */
  video: File
}
