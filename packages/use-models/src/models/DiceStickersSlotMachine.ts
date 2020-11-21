import { Sticker } from '@airgram/core'

/** Animated stickers to be combined into a slot machine */
export class DiceStickersSlotMachineBaseModel {
  public _: 'diceStickersSlotMachine'

  /**
   * The animated sticker with the slot machine background. The background animation must
   * start playing after all reel animations finish
   */
  public background: Sticker

  /**
   * The animated sticker with the lever animation. The lever animation must play once
   * in the initial dice state
   */
  public lever: Sticker

  /** The animated sticker with the left reel */
  public leftReel: Sticker

  /** The animated sticker with the center reel */
  public centerReel: Sticker

  /** The animated sticker with the right reel */
  public rightReel: Sticker
}
