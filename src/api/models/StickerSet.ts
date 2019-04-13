import { Sticker, StickerEmojis } from '../outputs'

/** Represents a sticker set */
export class StickerSetBaseModel {
  public _: 'stickerSet'
  /** Identifier of the sticker set */
  public id: number | string
  /** Title of the sticker set */
  public title: string
  /** Name of the sticker set */
  public name: string
  /** True, if the sticker set has been installed by the current user */
  public isInstalled: boolean
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  public isArchived: boolean
  /** True, if the sticker set is official */
  public isOfficial: boolean
  /** True, if the stickers in the set are masks */
  public isMasks: boolean
  /** True for already viewed trending sticker sets */
  public isViewed: boolean
  /** List of stickers in this set */
  public stickers: Sticker[]
  /** A list of emoji corresponding to the stickers in the same order */
  public emojis: StickerEmojis[]
}
