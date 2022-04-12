import { File, Sticker } from './index'

export type AnimatedEmojiUnion = AnimatedEmoji

/** Describes an animated representation of an emoji */
export interface AnimatedEmoji {
  _: 'animatedEmoji'
  /** Animated sticker for the emoji */
  sticker: Sticker
  /** Emoji modifier fitzpatrick type; 0-6; 0 if none */
  fitzpatrickType: number
  /**
   * File containing the sound to be played when the animated emoji is clicked; may be
   * null. The sound is encoded with the Opus codec, and stored inside an OGG container
   */
  sound?: File
}
