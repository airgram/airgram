import { FormattedText, InputFileUnion, InputThumbnail } from '@airgram/core'

/** A document message (general file) */
export class InputMessageDocumentBaseModel {
  public _: 'inputMessageDocument'

  /** Document to be sent */
  public document: InputFileUnion

  /** Document thumbnail; pass null to skip thumbnail uploading */
  public thumbnail: InputThumbnail

  /**
   * If true, automatic file type detection will be disabled and the document will be
   * always sent as file. Always true for files sent to secret chats
   */
  public disableContentTypeDetection: boolean

  /**
   * Document caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  public caption: FormattedText
}
