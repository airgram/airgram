import { Sticker } from './index'

export type ReactionUnion = Reaction

/** Contains stickers which must be used for reaction animation rendering */
export interface Reaction {
  _: 'reaction'
  /** Text representation of the reaction */
  reaction: string
  /** Reaction title */
  title: string
  /** True, if the reaction can be added to new messages and enabled in chats */
  isActive: boolean
  /** Static icon for the reaction */
  staticIcon: Sticker
  /** Appear animation for the reaction */
  appearAnimation: Sticker
  /** Select animation for the reaction */
  selectAnimation: Sticker
  /** Activate animation for the reaction */
  activateAnimation: Sticker
  /** Effect animation for the reaction */
  effectAnimation: Sticker
  /** Around animation for the reaction; may be null */
  aroundAnimation?: Sticker
  /** Center animation for the reaction; may be null */
  centerAnimation?: Sticker
}
