import { MaskPositionInput } from './index'

/** Describes type of a sticker */
export type StickerTypeInputUnion = StickerTypeStaticInput
  | StickerTypeAnimatedInput
  | StickerTypeVideoInput
  | StickerTypeMaskInput

/** The sticker is an image in WEBP format */
export interface StickerTypeStaticInput {
  _: 'stickerTypeStatic'
}

/** The sticker is an animation in TGS format */
export interface StickerTypeAnimatedInput {
  _: 'stickerTypeAnimated'
}

/** The sticker is a video in WEBM format */
export interface StickerTypeVideoInput {
  _: 'stickerTypeVideo'
}

/** The sticker is a mask in WEBP format to be placed on photos or videos */
export interface StickerTypeMaskInput {
  _: 'stickerTypeMask'
  /** Position where the mask is placed; may be null */
  maskPosition?: MaskPositionInput
}
