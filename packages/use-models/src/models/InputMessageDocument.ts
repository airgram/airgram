import { FormattedText, InputFileUnion, InputThumbnail } from '@airgram/core'

/** A document message (general file) */
export class InputMessageDocumentBaseModel {
  public _: 'inputMessageDocument'

  /** Document to be sent */
  public document: InputFileUnion

  /** Document thumbnail, if available */
  public thumbnail: InputThumbnail

  /**
   * If true, automatic file type detection will be disabled and the document will be
   * always sent as file. Always true for files sent to secret chats
   */
  public disableContentTypeDetection: boolean

  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  public caption: FormattedText
}
