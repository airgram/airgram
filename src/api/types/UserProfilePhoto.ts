import { FileLocationUnion } from './FileLocation'

export interface UserProfilePhoto {
  _: 'userProfilePhoto'
  photo_id: string
  photo_small: FileLocationUnion
  photo_big: FileLocationUnion
}

export interface UserProfilePhotoEmpty {
  _: 'userProfilePhotoEmpty'
}

export type UserProfilePhotoUnion = UserProfilePhoto
  | UserProfilePhotoEmpty
