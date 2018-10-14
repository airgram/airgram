import { DocumentUnion } from './Document'

export interface MessagesSavedGifs {
  _: 'messages.savedGifs'
  hash: number
  gifs: DocumentUnion[]
}

export interface MessagesSavedGifsNotModified {
  _: 'messages.savedGifsNotModified'
}

export type MessagesSavedGifsUnion = MessagesSavedGifs
  | MessagesSavedGifsNotModified
