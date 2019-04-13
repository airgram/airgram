import { Date, InputFileUnion } from './index'

export type InputIdentityDocumentUnion = InputIdentityDocument

/** An identity document to be saved to Telegram Passport */
export interface InputIdentityDocument {
  _: 'inputIdentityDocument'
  /** Document number; 1-24 characters */
  number: string
  /** Document expiry date, if available */
  expiryDate: Date
  /** Front side of the document */
  frontSide: InputFileUnion
  /** Reverse side of the document; only for driver license and identity card */
  reverseSide: InputFileUnion
  /** Selfie with the document, if available */
  selfie: InputFileUnion
  /** List of files containing a certified English translation of the document */
  translation: InputFileUnion[]
}
