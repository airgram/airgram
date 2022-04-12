import { ClosedVectorPath, File, StickerTypeUnion, Thumbnail } from './index'

export type StickerUnion = Sticker

/** Describes a sticker */
export interface Sticker {
  _: 'sticker'
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  setId: string
  /** Sticker width; as defined by the sender */
  width: number
  /** Sticker height; as defined by the sender */
  height: number
  /** Emoji corresponding to the sticker */
  emoji: string
  /** Sticker type */
  type: StickerTypeUnion
  /**
   * Sticker's outline represented as a list of closed vector paths; may be empty. The
   * coordinate system origin is in the upper-left corner
   */
  outline: ClosedVectorPath[]
  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  thumbnail?: Thumbnail
  /** File containing the sticker */
  sticker: File
}
