import { DocumentUnion } from './Document'

export interface MessagesStickers {
  _: 'messages.stickers'
  hash: string
  stickers: DocumentUnion[]
}

export interface MessagesStickersNotModified {
  _: 'messages.stickersNotModified'
}

export type MessagesStickersUnion = MessagesStickers
  | MessagesStickersNotModified
