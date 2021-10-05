import { InputFileUnion, InputThumbnail } from '@airgram/core'

/** A sticker message */
export class InputMessageStickerBaseModel {
  public _: 'inputMessageSticker'

  /** Sticker to be sent */
  public sticker: InputFileUnion

  /** Sticker thumbnail; pass null to skip thumbnail uploading */
  public thumbnail: InputThumbnail

  /** Sticker width */
  public width: number

  /** Sticker height */
  public height: number

  /** Emoji used to choose the sticker */
  public emoji: string
}
