import { File, PhotoSize } from './index'

export type DocumentUnion = Document

/** Describes a document of any type */
export interface Document {
  _: 'document'
  /** Original name of the file; as defined by the sender */
  fileName: string
  /** MIME type of the file; as defined by the sender */
  mimeType: string
  /** Document thumbnail; as defined by the sender; may be null */
  thumbnail?: PhotoSize
  /** File containing the document */
  document: File
}
