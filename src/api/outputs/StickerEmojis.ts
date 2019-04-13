export type StickerEmojisUnion = StickerEmojis

/**
 * Represents a list of all emoji corresponding to a sticker in a sticker set. The list
 * is only for informational purposes, because a sticker is always sent with a fixed
 * emoji from the corresponding Sticker object
 */
export interface StickerEmojis {
  _: 'stickerEmojis'
  /** List of emojis */
  emojis: string[]
}
