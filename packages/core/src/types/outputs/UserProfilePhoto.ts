import { PhotoSize } from './index'

export type UserProfilePhotoUnion = UserProfilePhoto

/** Contains full information about a user profile photo */
export interface UserProfilePhoto {
  _: 'userProfilePhoto'
  /** Unique user profile photo identifier */
  id: string
  /** Point in time (Unix timestamp) when the photo has been added */
  addedDate: number
  /** Available variants of the user photo, in different sizes */
  sizes: PhotoSize[]
}
