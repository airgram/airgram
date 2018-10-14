import { DocumentUnion } from './Document'
import { StickerPackUnion } from './StickerPack'
import { StickerSetUnion } from './StickerSet'

export interface MessagesStickerSet {
  _: 'messages.stickerSet'
  set: StickerSetUnion
  packs: StickerPackUnion[]
  documents: DocumentUnion[]
}

export type MessagesStickerSetUnion = MessagesStickerSet
