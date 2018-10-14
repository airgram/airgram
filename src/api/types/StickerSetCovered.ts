import { DocumentUnion } from './Document'
import { StickerSetUnion } from './StickerSet'

export interface StickerSetCovered {
  _: 'stickerSetCovered'
  set: StickerSetUnion
  cover: DocumentUnion
}

export interface StickerSetMultiCovered {
  _: 'stickerSetMultiCovered'
  set: StickerSetUnion
  covers: DocumentUnion[]
}

export type StickerSetCoveredUnion = StickerSetCovered
  | StickerSetMultiCovered
