import { DatedFile } from '../outputs'

/** A personal document, containing some information about a user */
export class PersonalDocumentBaseModel {
  public _: 'personalDocument'
  /** List of files containing the pages of the document */
  public files: DatedFile[]
  /** List of files containing a certified English translation of the document */
  public translation: DatedFile[]
}
