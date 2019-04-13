import { Sticker } from '../outputs'

/** Represents short information about a sticker set */
export class StickerSetInfoBaseModel {
  public _: 'stickerSetInfo'
  /** Identifier of the sticker set */
  public id: number | string
  /** Title of the sticker set */
  public title: string
  /** Name of the sticker set */
  public name: string
  /** True, if the sticker set has been installed by current user */
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
  /** Total number of stickers in the set */
  public size: number
  /**
   * Contains up to the first 5 stickers from the set, depending on the context. If the
   * client needs more stickers the full set should be requested
   */
  public covers: Sticker[]
}
