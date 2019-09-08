import { Sticker } from './index'

export type StickersUnion = Stickers

/** Represents a list of stickers */
export interface Stickers {
  _: 'stickers'
  /** List of stickers */
  stickers: Sticker[]
}
