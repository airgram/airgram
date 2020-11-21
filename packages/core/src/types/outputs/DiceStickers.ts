import { Sticker } from './index'

/** Contains animated stickers which should be used for dice animation rendering */
export type DiceStickersUnion = DiceStickersRegular | DiceStickersSlotMachine

/** A regular animated sticker */
export interface DiceStickersRegular {
  _: 'diceStickersRegular'
  /** The animated sticker with the dice animation */
  sticker: Sticker
}

/** Animated stickers to be combined into a slot machine */
export interface DiceStickersSlotMachine {
  _: 'diceStickersSlotMachine'
  /**
   * The animated sticker with the slot machine background. The background animation must
   * start playing after all reel animations finish
   */
  background: Sticker
  /**
   * The animated sticker with the lever animation. The lever animation must play once
   * in the initial dice state
   */
  lever: Sticker
  /** The animated sticker with the left reel */
  leftReel: Sticker
  /** The animated sticker with the center reel */
  centerReel: Sticker
  /** The animated sticker with the right reel */
  rightReel: Sticker
}
