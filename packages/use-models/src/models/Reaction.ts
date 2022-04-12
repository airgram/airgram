import { Sticker } from '@airgram/core'

/** Contains stickers which must be used for reaction animation rendering */
export class ReactionBaseModel {
  public _: 'reaction'

  /** Text representation of the reaction */
  public reaction: string

  /** Reaction title */
  public title: string

  /** True, if the reaction can be added to new messages and enabled in chats */
  public isActive: boolean

  /** Static icon for the reaction */
  public staticIcon: Sticker

  /** Appear animation for the reaction */
  public appearAnimation: Sticker

  /** Select animation for the reaction */
  public selectAnimation: Sticker

  /** Activate animation for the reaction */
  public activateAnimation: Sticker

  /** Effect animation for the reaction */
  public effectAnimation: Sticker

  /** Around animation for the reaction; may be null */
  public aroundAnimation?: Sticker

  /** Center animation for the reaction; may be null */
  public centerAnimation?: Sticker
}
