import { Animation, FormattedText } from '@airgram/core'

/** An animation message (GIF-style). */
export class MessageAnimationBaseModel {
  public _: 'messageAnimation'

  /** Message content */
  public animation: Animation

  /** Animation caption */
  public caption: FormattedText

  /**
   * True, if the animation thumbnail must be blurred and the animation must be shown
   * only while tapped
   */
  public isSecret: boolean
}
