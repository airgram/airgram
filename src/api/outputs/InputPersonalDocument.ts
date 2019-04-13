import { InputFileUnion } from './index'

export type InputPersonalDocumentUnion = InputPersonalDocument

/** A personal document to be saved to Telegram Passport */
export interface InputPersonalDocument {
  _: 'inputPersonalDocument'
  /** List of files containing the pages of the document */
  files: InputFileUnion[]
  /** List of files containing a certified English translation of the document */
  translation: InputFileUnion[]
}
