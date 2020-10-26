import { File, MaskPosition, Thumbnail } from '@airgram/core'

/** Describes a sticker */
export class StickerBaseModel {
  public _: 'sticker'

  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  public setId: string

  /** Sticker width; as defined by the sender */
  public width: number

  /** Sticker height; as defined by the sender */
  public height: number

  /** Emoji corresponding to the sticker */
  public emoji: string

  /** True, if the sticker is an animated sticker in TGS format */
  public isAnimated: boolean

  /** True, if the sticker is a mask */
  public isMask: boolean

  /** Position where the mask should be placed; may be null */
  public maskPosition?: MaskPosition

  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  public thumbnail?: Thumbnail

  /** File containing the sticker */
  public sticker: File
}
