import { InputFileInputUnion } from './index'

export type InputPersonalDocumentInputUnion = InputPersonalDocumentInput

/** A personal document to be saved to Telegram Passport */
export interface InputPersonalDocumentInput {
  _: 'inputPersonalDocument'
  /** List of files containing the pages of the document */
  files?: InputFileInputUnion[]
  /** List of files containing a certified English translation of the document */
  translation?: InputFileInputUnion[]
}
