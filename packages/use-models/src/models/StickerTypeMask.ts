import { MaskPosition } from '@airgram/core'

/** The sticker is a mask in WEBP format to be placed on photos or videos */
export class StickerTypeMaskBaseModel {
  public _: 'stickerTypeMask'

  /** Position where the mask is placed; may be null */
  public maskPosition?: MaskPosition
}
