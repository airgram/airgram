import {
  ClosedVectorPath,
  Emojis,
  Sticker,
  StickerTypeUnion,
  Thumbnail
} from '@airgram/core'

/** Represents a sticker set */
export class StickerSetBaseModel {
  public _: 'stickerSet'

  /** Identifier of the sticker set */
  public id: string

  /** Title of the sticker set */
  public title: string

  /** Name of the sticker set */
  public name: string

  /**
   * Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may
   * be null. The file can be downloaded only before the thumbnail is changed
   */
  public thumbnail?: Thumbnail

  /**
   * Sticker set thumbnail's outline represented as a list of closed vector paths; may
   * be empty. The coordinate system origin is in the upper-left corner
   */
  public thumbnailOutline: ClosedVectorPath[]

  /** True, if the sticker set has been installed by the current user */
  public isInstalled: boolean

  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  public isArchived: boolean

  /** True, if the sticker set is official */
  public isOfficial: boolean

  /** Type of the stickers in the set */
  public stickerType: StickerTypeUnion

  /** True for already viewed trending sticker sets */
  public isViewed: boolean

  /** List of stickers in this set */
  public stickers: Sticker[]

  /**
   * A list of emoji corresponding to the stickers in the same order. The list is only
   * for informational purposes, because a sticker is always sent with a fixed emoji from
   * the corresponding Sticker object
   */
  public emojis: Emojis[]
}
