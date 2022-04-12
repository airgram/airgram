import { MaskPosition } from './index'

/** Describes type of a sticker */
export type StickerTypeUnion = StickerTypeStatic
  | StickerTypeAnimated
  | StickerTypeVideo
  | StickerTypeMask

/** The sticker is an image in WEBP format */
export interface StickerTypeStatic {
  _: 'stickerTypeStatic'
}

/** The sticker is an animation in TGS format */
export interface StickerTypeAnimated {
  _: 'stickerTypeAnimated'
}

/** The sticker is a video in WEBM format */
export interface StickerTypeVideo {
  _: 'stickerTypeVideo'
}

/** The sticker is a mask in WEBP format to be placed on photos or videos */
export interface StickerTypeMask {
  _: 'stickerTypeMask'
  /** Position where the mask is placed; may be null */
  maskPosition?: MaskPosition
}
