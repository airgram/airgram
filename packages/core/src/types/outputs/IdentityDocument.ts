import { Date, DatedFile } from './index'

export type IdentityDocumentUnion = IdentityDocument

/** An identity document */
export interface IdentityDocument {
  _: 'identityDocument'
  /** Document number; 1-24 characters */
  number: string
  /** Document expiry date; may be null */
  expiryDate?: Date
  /** Front side of the document */
  frontSide: DatedFile
  /** Reverse side of the document; only for driver license and identity card; may be null */
  reverseSide?: DatedFile
  /** Selfie with the document; may be null */
  selfie?: DatedFile
  /** List of files containing a certified English translation of the document */
  translation: DatedFile[]
}
