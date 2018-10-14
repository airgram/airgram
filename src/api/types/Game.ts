import { DocumentUnion } from './Document'
import { PhotoUnion } from './Photo'

export interface Game {
  _: 'game'
  flags: number
  id: number
  access_hash: number
  short_name: string
  title: string
  description: string
  photo: PhotoUnion
  document?: DocumentUnion
}

export type GameUnion = Game
