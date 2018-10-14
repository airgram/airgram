import { FileLocationUnion } from './FileLocation'

export interface PhotoCachedSize {
  _: 'photoCachedSize'
  type: string
  location: FileLocationUnion
  w: number
  h: number
  bytes: number[]
}

export interface PhotoSize {
  _: 'photoSize'
  type: string
  location: FileLocationUnion
  w: number
  h: number
  size: number
}

export interface PhotoSizeEmpty {
  _: 'photoSizeEmpty'
  type: string
}

export type PhotoSizeUnion = PhotoCachedSize
  | PhotoSize
  | PhotoSizeEmpty
