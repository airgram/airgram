import { Date, InputFileUnion } from '../outputs'

/** An identity document to be saved to Telegram Passport */
export class InputIdentityDocumentBaseModel {
  public _: 'inputIdentityDocument'
  /** Document number; 1-24 characters */
  public number: string
  /** Document expiry date, if available */
  public expiryDate: Date
  /** Front side of the document */
  public frontSide: InputFileUnion
  /** Reverse side of the document; only for driver license and identity card */
  public reverseSide: InputFileUnion
  /** Selfie with the document, if available */
  public selfie: InputFileUnion
  /** List of files containing a certified English translation of the document */
  public translation: InputFileUnion[]
}
