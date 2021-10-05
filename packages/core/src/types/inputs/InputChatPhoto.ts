import { InputFileInputUnion } from './index'

/** Describes a photo to be set as a user profile or chat photo */
export type InputChatPhotoInputUnion = InputChatPhotoPreviousInput
  | InputChatPhotoStaticInput
  | InputChatPhotoAnimationInput

/** A previously used profile photo of the current user */
export interface InputChatPhotoPreviousInput {
  _: 'inputChatPhotoPrevious'
  /** Identifier of the current user's profile photo to reuse */
  chatPhotoId?: string
}

/** A static photo in JPEG format */
export interface InputChatPhotoStaticInput {
  _: 'inputChatPhotoStatic'
  /**
   * Photo to be set as profile photo. Only inputFileLocal and inputFileGenerated are
   * allowed
   */
  photo?: InputFileInputUnion
}

/**
 * An animation in MPEG4 format; must be square, at most 10 seconds long, have width
 * between 160 and 800 and be at most 2MB in size
 */
export interface InputChatPhotoAnimationInput {
  _: 'inputChatPhotoAnimation'
  /**
   * Animation to be set as profile photo. Only inputFileLocal and inputFileGenerated
   * are allowed
   */
  animation?: InputFileInputUnion
  /** Timestamp of the frame, which will be used as static chat photo */
  mainFrameTimestamp?: number
}
