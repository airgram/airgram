import { PhotoSizeUnion } from './PhotoSize'

export interface Photo {
  _: 'photo'
  flags: number
  has_stickers?: true
  id: string
  access_hash: string
  date: number
  sizes: PhotoSizeUnion[]
}

export interface PhotoEmpty {
  _: 'photoEmpty'
  id: string
}

export type PhotoUnion = Photo
  | PhotoEmpty
