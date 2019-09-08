import { File } from './index'

export type ProfilePhotoUnion = ProfilePhoto

/** Describes a user profile photo */
export interface ProfilePhoto {
  _: 'profilePhoto'
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * userProfilePhotos
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
}
