import { InputFileUnion, MaskPosition } from './index'

export type InputStickerUnion = InputSticker

/** Describes a sticker that should be added to a sticker set */
export interface InputSticker {
  _: 'inputSticker'
  /** PNG image with the sticker; must be up to 512 kB in size and fit in a 512x512 square */
  pngSticker: InputFileUnion
  /** Emoji corresponding to the sticker */
  emojis: string
  /** For masks, position where the mask should be placed; may be null */
  maskPosition?: MaskPosition
}
