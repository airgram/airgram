import { Document } from '@airgram/core'

/** A document message (a general file) */
export class PushMessageContentDocumentBaseModel {
  public _: 'pushMessageContentDocument'

  /** Message content; may be null */
  public document?: Document

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
