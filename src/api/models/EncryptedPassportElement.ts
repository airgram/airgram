import { DatedFile, PassportElementTypeUnion } from '../outputs'

/** Contains information about an encrypted Telegram Passport element; for bots only */
export class EncryptedPassportElementBaseModel {
  public _: 'encryptedPassportElement'
  /** Type of Telegram Passport element */
  public type: PassportElementTypeUnion
  /** Encrypted JSON-encoded data about the user */
  public data: string
  /** The front side of an identity document */
  public frontSide: DatedFile
  /** The reverse side of an identity document; may be null */
  public reverseSide?: DatedFile
  /** Selfie with the document; may be null */
  public selfie?: DatedFile
  /** List of files containing a certified English translation of the document */
  public translation: DatedFile[]
  /** List of attached files */
  public files: DatedFile[]
  /** Unencrypted data, phone number or email address */
  public value: string
  /** Hash of the entire element */
  public hash: string
}
