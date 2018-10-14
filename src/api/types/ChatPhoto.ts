import { FileLocationUnion } from './FileLocation'

export interface ChatPhoto {
  _: 'chatPhoto'
  photo_small: FileLocationUnion
  photo_big: FileLocationUnion
}

export interface ChatPhotoEmpty {
  _: 'chatPhotoEmpty'
}

export type ChatPhotoUnion = ChatPhoto
  | ChatPhotoEmpty
