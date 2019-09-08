import { FormattedText, InputFileUnion, InputThumbnail } from '@airgram/core'

/** A document message (general file) */
export class InputMessageDocumentBaseModel {
  public _: 'inputMessageDocument'

  /** Document to be sent */
  public document: InputFileUnion

  /** Document thumbnail, if available */
  public thumbnail: InputThumbnail

  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  public caption: FormattedText
}
