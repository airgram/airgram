import { InputFileUnion, MaskPosition } from '../outputs'

/** Describes a sticker that should be added to a sticker set */
export class InputStickerBaseModel {
  public _: 'inputSticker'
  /** PNG image with the sticker; must be up to 512 kB in size and fit in a 512x512 square */
  public pngSticker: InputFileUnion
  /** Emoji corresponding to the sticker */
  public emojis: string
  /** For masks, position where the mask should be placed; may be null */
  public maskPosition?: MaskPosition
}
