import { File, PhotoSize } from './index'

export type AnimationUnion = Animation

/** Describes an animation file. The animation must be encoded in GIF or MPEG4 format */
export interface Animation {
  _: 'animation'
  /** Duration of the animation, in seconds; as defined by the sender */
  duration: number
  /** Width of the animation */
  width: number
  /** Height of the animation */
  height: number
  /** Original name of the file; as defined by the sender */
  fileName: string
  /** MIME type of the file, usually "image/gif" or "video/mp4" */
  mimeType: string
  /** Animation thumbnail; may be null */
  thumbnail?: PhotoSize
  /** File containing the animation */
  animation: File
}
