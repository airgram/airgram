import { VoiceNote } from '@airgram/core'

/** A voice note message */
export class PushMessageContentVoiceNoteBaseModel {
  public _: 'pushMessageContentVoiceNote'

  /** Message content; may be null */
  public voiceNote?: VoiceNote

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
