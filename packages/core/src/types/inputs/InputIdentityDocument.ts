import { DateInput, InputFileInputUnion } from './index'

export type InputIdentityDocumentInputUnion = InputIdentityDocumentInput

/** An identity document to be saved to Telegram Passport */
export interface InputIdentityDocumentInput {
  _: 'inputIdentityDocument'
  /** Document number; 1-24 characters */
  number?: string
  /** Document expiry date, if available */
  expiryDate?: DateInput
  /** Front side of the document */
  frontSide?: InputFileInputUnion
  /**
   * Reverse side of the document; only for driver license and identity card; pass null
   * otherwise
   */
  reverseSide?: InputFileInputUnion
  /** Selfie with the document; pass null if unavailable */
  selfie?: InputFileInputUnion
  /** List of files containing a certified English translation of the document */
  translation?: InputFileInputUnion[]
}
