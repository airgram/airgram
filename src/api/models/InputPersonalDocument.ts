import { InputFileUnion } from '../outputs'

/** A personal document to be saved to Telegram Passport */
export class InputPersonalDocumentBaseModel {
  public _: 'inputPersonalDocument'
  /** List of files containing the pages of the document */
  public files: InputFileUnion[]
  /** List of files containing a certified English translation of the document */
  public translation: InputFileUnion[]
}
