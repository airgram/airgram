import {
  ClosedVectorPath,
  Sticker,
  StickerTypeUnion,
  Thumbnail
} from '@airgram/core'

/** Represents short information about a sticker set */
export class StickerSetInfoBaseModel {
  public _: 'stickerSetInfo'

  /** Identifier of the sticker set */
  public id: string

  /** Title of the sticker set */
  public title: string

  /** Name of the sticker set */
  public name: string

  /**
   * Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may
   * be null
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

  /** Total number of stickers in the set */
  public size: number

  /**
   * Up to the first 5 stickers from the set, depending on the context. If the application
   * needs more stickers the full sticker set needs to be requested
   */
  public covers: Sticker[]
}
