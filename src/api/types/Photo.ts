import { PhotoSizeUnion } from './PhotoSize'

export interface Photo {
  _: 'photo'
  flags: number
  has_stickers?: true
  id: number
  access_hash: number
  date: number
  sizes: PhotoSizeUnion[]
}

export interface PhotoEmpty {
  _: 'photoEmpty'
  id: number
}

export type PhotoUnion = Photo
  | PhotoEmpty
