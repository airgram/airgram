import { Document, FormattedText } from '@airgram/core'

/** A document message (general file) */
export class MessageDocumentBaseModel {
  public _: 'messageDocument'

  /** Message content */
  public document: Document

  /** Document caption */
  public caption: FormattedText
}
