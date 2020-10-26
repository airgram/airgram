import { File } from '@airgram/core'

/** Animated variant of a chat photo in MPEG4 format */
export class AnimatedChatPhotoBaseModel {
  public _: 'animatedChatPhoto'

  /** Animation width and height */
  public length: number

  /** Information about the animation file */
  public file: File

  /** Timestamp of the frame, used as a static chat photo */
  public mainFrameTimestamp: number
}
