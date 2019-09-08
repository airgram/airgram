import { Audio } from '@airgram/core'

/** An audio message */
export class PushMessageContentAudioBaseModel {
  public _: 'pushMessageContentAudio'

  /** Message content; may be null */
  public audio?: Audio

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
