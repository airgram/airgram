import { FoundGifUnion } from './FoundGif'

export interface MessagesFoundGifs {
  _: 'messages.foundGifs'
  next_offset: number
  results: FoundGifUnion[]
}

export type MessagesFoundGifsUnion = MessagesFoundGifs
