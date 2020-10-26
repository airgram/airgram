import { File } from './index'

export type AnimatedChatPhotoUnion = AnimatedChatPhoto

/** Animated variant of a chat photo in MPEG4 format */
export interface AnimatedChatPhoto {
  _: 'animatedChatPhoto'
  /** Animation width and height */
  length: number
  /** Information about the animation file */
  file: File
  /** Timestamp of the frame, used as a static chat photo */
  mainFrameTimestamp: number
}
