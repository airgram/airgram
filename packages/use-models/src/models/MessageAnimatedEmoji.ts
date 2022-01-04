import { AnimatedEmoji } from '@airgram/core'

/** A message with an animated emoji */
export class MessageAnimatedEmojiBaseModel {
  public _: 'messageAnimatedEmoji'

  /** The animated emoji */
  public animatedEmoji: AnimatedEmoji

  /** The corresponding emoji */
  public emoji: string
}
