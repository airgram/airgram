import { InputFileUnion, InputThumbnail } from '../outputs'

/** A sticker message */
export class InputMessageStickerBaseModel {
  public _: 'inputMessageSticker'
  /** Sticker to be sent */
  public sticker: InputFileUnion
  /** Sticker thumbnail, if available */
  public thumbnail: InputThumbnail
  /** Sticker width */
  public width: number
  /** Sticker height */
  public height: number
}
