import { DatedFile } from './index'

export type PersonalDocumentUnion = PersonalDocument

/** A personal document, containing some information about a user */
export interface PersonalDocument {
  _: 'personalDocument'
  /** List of files containing the pages of the document */
  files: DatedFile[]
  /** List of files containing a certified English translation of the document */
  translation: DatedFile[]
}
