import { Sticker, StickerEmojis } from './index'

export type StickerSetUnion = StickerSet

/** Represents a sticker set */
export interface StickerSet {
  _: 'stickerSet'
  /** Identifier of the sticker set */
  id: number | string
  /** Title of the sticker set */
  title: string
  /** Name of the sticker set */
  name: string
  /** True, if the sticker set has been installed by the current user */
  isInstalled: boolean
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  isArchived: boolean
  /** True, if the sticker set is official */
  isOfficial: boolean
  /** True, if the stickers in the set are masks */
  isMasks: boolean
  /** True for already viewed trending sticker sets */
  isViewed: boolean
  /** List of stickers in this set */
  stickers: Sticker[]
  /** A list of emoji corresponding to the stickers in the same order */
  emojis: StickerEmojis[]
}
