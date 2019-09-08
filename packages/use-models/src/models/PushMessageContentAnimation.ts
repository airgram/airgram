import { Animation } from '@airgram/core'

/** An animation message (GIF-style). */
export class PushMessageContentAnimationBaseModel {
  public _: 'pushMessageContentAnimation'

  /** Message content; may be null */
  public animation?: Animation

  /** Animation caption */
  public caption: string

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
