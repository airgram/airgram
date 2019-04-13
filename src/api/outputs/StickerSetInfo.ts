import { Sticker } from './index'

export type StickerSetInfoUnion = StickerSetInfo

/** Represents short information about a sticker set */
export interface StickerSetInfo {
  _: 'stickerSetInfo'
  /** Identifier of the sticker set */
  id: number | string
  /** Title of the sticker set */
  title: string
  /** Name of the sticker set */
  name: string
  /** True, if the sticker set has been installed by current user */
  isInstalled: boolean
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  isArchived: boolean
  /** True, if the sticker set is official */
  isOfficial: boolean
  /** True, if the stickers in the set are masks */
  isMasks: boolean
  /** True for already viewed trending sticker sets */
  isViewed: boolean
  /** Total number of stickers in the set */
  size: number
  /**
   * Contains up to the first 5 stickers from the set, depending on the context. If the
   * client needs more stickers the full set should be requested
   */
  covers: Sticker[]
}
