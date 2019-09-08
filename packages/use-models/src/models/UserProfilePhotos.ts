import { UserProfilePhoto } from '@airgram/core'

/** Contains part of the list of user photos */
export class UserProfilePhotosBaseModel {
  public _: 'userProfilePhotos'

  /** Total number of user profile photos */
  public totalCount: number

  /** A list of photos */
  public photos: UserProfilePhoto[]
}
