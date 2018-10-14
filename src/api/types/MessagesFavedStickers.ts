import { DocumentUnion } from './Document'
import { StickerPackUnion } from './StickerPack'

export interface MessagesFavedStickers {
  _: 'messages.favedStickers'
  hash: number
  packs: StickerPackUnion[]
  stickers: DocumentUnion[]
}

export interface MessagesFavedStickersNotModified {
  _: 'messages.favedStickersNotModified'
}

export type MessagesFavedStickersUnion = MessagesFavedStickers
  | MessagesFavedStickersNotModified
