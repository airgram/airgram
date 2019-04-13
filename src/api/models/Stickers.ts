import { Sticker } from '../outputs'

/** Represents a list of stickers */
export class StickersBaseModel {
  public _: 'stickers'
  /** List of stickers */
  public stickers: Sticker[]
}
