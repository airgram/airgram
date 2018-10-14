import { StickerSetUnion } from './StickerSet'

export interface MessagesAllStickers {
  _: 'messages.allStickers'
  hash: number
  sets: StickerSetUnion[]
}

export interface MessagesAllStickersNotModified {
  _: 'messages.allStickersNotModified'
}

export type MessagesAllStickersUnion = MessagesAllStickers
  | MessagesAllStickersNotModified
