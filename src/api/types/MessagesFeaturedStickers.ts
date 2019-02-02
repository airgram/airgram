import { StickerSetCoveredUnion } from './StickerSetCovered'

export interface MessagesFeaturedStickers {
  _: 'messages.featuredStickers'
  hash: number
  sets: StickerSetCoveredUnion[]
  unread: string[]
}

export interface MessagesFeaturedStickersNotModified {
  _: 'messages.featuredStickersNotModified'
}

export type MessagesFeaturedStickersUnion = MessagesFeaturedStickers
  | MessagesFeaturedStickersNotModified
