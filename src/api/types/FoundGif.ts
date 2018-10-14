import { DocumentUnion } from './Document'
import { PhotoUnion } from './Photo'

export interface FoundGif {
  _: 'foundGif'
  url: string
  thumb_url: string
  content_url: string
  content_type: string
  w: number
  h: number
}

export interface FoundGifCached {
  _: 'foundGifCached'
  url: string
  photo: PhotoUnion
  document: DocumentUnion
}

export type FoundGifUnion = FoundGif
  | FoundGifCached
