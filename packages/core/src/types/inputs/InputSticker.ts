import { InputFileInputUnion, StickerTypeInputUnion } from './index'

export type InputStickerInputUnion = InputStickerInput

/** A sticker to be added to a sticker set */
export interface InputStickerInput {
  _: 'inputSticker'
  /**
   * File with the sticker; must fit in a 512x512 square. For WEBP stickers and masks
   * the file must be in PNG format, which will be converted to WEBP server-side. Otherwise,
   * the file must be local or uploaded within a week. See https://core.telegram.org/animated_stickers#technical-requirements
   * for technical requirements
   */
  sticker?: InputFileInputUnion
  /** Emojis corresponding to the sticker */
  emojis?: string
  /** Sticker type */
  type?: StickerTypeInputUnion
}
