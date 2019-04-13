import { DatedFile, PassportElementTypeUnion } from './index'

export type EncryptedPassportElementUnion = EncryptedPassportElement

/** Contains information about an encrypted Telegram Passport element; for bots only */
export interface EncryptedPassportElement {
  _: 'encryptedPassportElement'
  /** Type of Telegram Passport element */
  type: PassportElementTypeUnion
  /** Encrypted JSON-encoded data about the user */
  data: string
  /** The front side of an identity document */
  frontSide: DatedFile
  /** The reverse side of an identity document; may be null */
  reverseSide?: DatedFile
  /** Selfie with the document; may be null */
  selfie?: DatedFile
  /** List of files containing a certified English translation of the document */
  translation: DatedFile[]
  /** List of attached files */
  files: DatedFile[]
  /** Unencrypted data, phone number or email address */
  value: string
  /** Hash of the entire element */
  hash: string
}
