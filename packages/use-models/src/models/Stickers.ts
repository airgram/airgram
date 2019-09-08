import { Sticker } from '@airgram/core'

/** Represents a list of stickers */
export class StickersBaseModel {
  public _: 'stickers'

  /** List of stickers */
  public stickers: Sticker[]
}
