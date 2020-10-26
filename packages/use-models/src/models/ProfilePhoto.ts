import { File } from '@airgram/core'

/** Describes a user profile photo */
export class ProfilePhotoBaseModel {
  public _: 'profilePhoto'

  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * user profile photos
   */
  public id: string

  /**
   * A small (160x160) user profile photo. The file can be downloaded only before the
   * photo is changed
   */
  public small: File

  /**
   * A big (640x640) user profile photo. The file can be downloaded only before the photo
   * is changed
   */
  public big: File

  /** True, if the photo has animated variant */
  public hasAnimation: boolean
}
