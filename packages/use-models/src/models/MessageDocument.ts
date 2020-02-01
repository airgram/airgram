import { Document, FormattedText } from '@airgram/core'

/** A document message (general file) */
export class MessageDocumentBaseModel {
  public _: 'messageDocument'

  /** The document description */
  public document: Document

  /** Document caption */
  public caption: FormattedText
}
