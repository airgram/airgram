import { Date, DatedFile } from '@airgram/core'

/** An identity document */
export class IdentityDocumentBaseModel {
  public _: 'identityDocument'

  /** Document number; 1-24 characters */
  public number: string

  /** Document expiry date; may be null */
  public expiryDate?: Date

  /** Front side of the document */
  public frontSide: DatedFile

  /** Reverse side of the document; only for driver license and identity card; may be null */
  public reverseSide?: DatedFile

  /** Selfie with the document; may be null */
  public selfie?: DatedFile

  /** List of files containing a certified English translation of the document */
  public translation: DatedFile[]
}
