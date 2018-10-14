import { PhotoUnion } from './Photo'
import { UserUnion } from './User'

export interface PhotosPhoto {
  _: 'photos.photo'
  photo: PhotoUnion
  users: UserUnion[]
}

export type PhotosPhotoUnion = PhotosPhoto
