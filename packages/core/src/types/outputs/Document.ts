import { File, Minithumbnail, Thumbnail } from './index'

export type DocumentUnion = Document

/** Describes a document of any type */
export interface Document {
  _: 'document'
  /** Original name of the file; as defined by the sender */
  fileName: string
  /** MIME type of the file; as defined by the sender */
  mimeType: string
  /** Document minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /**
   * Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns);
   * as defined by the sender; may be null
   */
  thumbnail?: Thumbnail
  /** File containing the document */
  document: File
}
