import { StickerSetCoveredUnion } from './StickerSetCovered'

export interface MessagesArchivedStickers {
  _: 'messages.archivedStickers'
  count: number
  sets: StickerSetCoveredUnion[]
}

export type MessagesArchivedStickersUnion = MessagesArchivedStickers
