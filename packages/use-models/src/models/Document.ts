import { File, Minithumbnail, PhotoSize } from '@airgram/core'

/** Describes a document of any type */
export class DocumentBaseModel {
  public _: 'document'

  /** Original name of the file; as defined by the sender */
  public fileName: string

  /** MIME type of the file; as defined by the sender */
  public mimeType: string

  /** Document minithumbnail; may be null */
  public minithumbnail?: Minithumbnail

  /**
   * Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns);
   * as defined by the sender; may be null
   */
  public thumbnail?: PhotoSize

  /** File containing the document */
  public document: File
}
