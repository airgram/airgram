import { EncryptedCredentials, EncryptedPassportElement } from '../outputs'

/** Telegram Passport data has been received; for bots only */
export class MessagePassportDataReceivedBaseModel {
  public _: 'messagePassportDataReceived'
  /** List of received Telegram Passport elements */
  public elements: EncryptedPassportElement[]
  /** Encrypted data credentials */
  public credentials: EncryptedCredentials
}
