import { UserProfilePhoto } from './index'

export type UserProfilePhotosUnion = UserProfilePhotos

/** Contains part of the list of user photos */
export interface UserProfilePhotos {
  _: 'userProfilePhotos'
  /** Total number of user profile photos */
  totalCount: number
  /** A list of photos */
  photos: UserProfilePhoto[]
}
