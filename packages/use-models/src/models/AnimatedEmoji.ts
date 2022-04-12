import { File, Sticker } from '@airgram/core'

/** Describes an animated representation of an emoji */
export class AnimatedEmojiBaseModel {
  public _: 'animatedEmoji'

  /** Animated sticker for the emoji */
  public sticker: Sticker

  /** Emoji modifier fitzpatrick type; 0-6; 0 if none */
  public fitzpatrickType: number

  /**
   * File containing the sound to be played when the animated emoji is clicked; may be
   * null. The sound is encoded with the Opus codec, and stored inside an OGG container
   */
  public sound?: File
}
