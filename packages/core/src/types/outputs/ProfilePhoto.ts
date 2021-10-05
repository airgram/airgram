import { File, Minithumbnail } from './index'

export type ProfilePhotoUnion = ProfilePhoto

/** Describes a user profile photo */
export interface ProfilePhoto {
  _: 'profilePhoto'
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * user profile photos
   */
  id: string
  /**
   * A small (160x160) user profile photo. The file can be downloaded only before the
   * photo is changed
   */
  small: File
  /**
   * A big (640x640) user profile photo. The file can be downloaded only before the photo
   * is changed
   */
  big: File
  /** User profile photo minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /** True, if the photo has animated variant */
  hasAnimation: boolean
}
