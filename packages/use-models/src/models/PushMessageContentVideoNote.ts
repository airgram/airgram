import { VideoNote } from '@airgram/core'

/** A video note message */
export class PushMessageContentVideoNoteBaseModel {
  public _: 'pushMessageContentVideoNote'

  /** Message content; may be null */
  public videoNote?: VideoNote

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
