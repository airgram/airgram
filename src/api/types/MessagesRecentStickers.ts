import { DocumentUnion } from './Document'

export interface MessagesRecentStickers {
  _: 'messages.recentStickers'
  hash: number
  stickers: DocumentUnion[]
}

export interface MessagesRecentStickersNotModified {
  _: 'messages.recentStickersNotModified'
}

export type MessagesRecentStickersUnion = MessagesRecentStickers
  | MessagesRecentStickersNotModified
