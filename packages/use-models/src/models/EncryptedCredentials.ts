/** Contains encrypted Telegram Passport data credentials */
export class EncryptedCredentialsBaseModel {
  public _: 'encryptedCredentials'

  /** The encrypted credentials */
  public data: string

  /** The decrypted data hash */
  public hash: string

  /** Secret for data decryption, encrypted with the service's public key */
  public secret: string
}
