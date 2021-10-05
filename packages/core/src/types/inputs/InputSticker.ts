import { InputFileInputUnion, MaskPositionInput } from './index'

/** Describes a sticker that needs to be added to a sticker set */
export type InputStickerInputUnion = InputStickerStaticInput
  | InputStickerAnimatedInput

/** A static sticker in PNG format, which will be converted to WEBP server-side */
export interface InputStickerStaticInput {
  _: 'inputStickerStatic'
  /** PNG image with the sticker; must be up to 512 KB in size and fit in a 512x512 square */
  sticker?: InputFileInputUnion
  /** Emojis corresponding to the sticker */
  emojis?: string
  /** For masks, position where the mask is placed; pass null if unspecified */
  maskPosition?: MaskPositionInput
}

/** An animated sticker in TGS format */
export interface InputStickerAnimatedInput {
  _: 'inputStickerAnimated'
  /**
   * File with the animated sticker. Only local or uploaded within a week files are supported.
   * See https://core.telegram.org/animated_stickers#technical-requirements for technical
   * requirements
   */
  sticker?: InputFileInputUnion
  /** Emojis corresponding to the sticker */
  emojis?: string
}
