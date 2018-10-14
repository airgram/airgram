import { PhotoUnion } from './Photo'
import { UserUnion } from './User'

export interface PhotosPhotos {
  _: 'photos.photos'
  photos: PhotoUnion[]
  users: UserUnion[]
}

export interface PhotosPhotosSlice {
  _: 'photos.photosSlice'
  count: number
  photos: PhotoUnion[]
  users: UserUnion[]
}

export type PhotosPhotosUnion = PhotosPhotos
  | PhotosPhotosSlice
