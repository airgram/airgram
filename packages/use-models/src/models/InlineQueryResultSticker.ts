import { Sticker } from '@airgram/core'

/** Represents a sticker */
export class InlineQueryResultStickerBaseModel {
  public _: 'inlineQueryResultSticker'

  /** Unique identifier of the query result */
  public id: string

  /** Sticker */
  public sticker: Sticker
}
