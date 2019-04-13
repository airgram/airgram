export type EncryptedCredentialsUnion = EncryptedCredentials

/** Contains encrypted Telegram Passport data credentials */
export interface EncryptedCredentials {
  _: 'encryptedCredentials'
  /** The encrypted credentials */
  data: string
  /** The decrypted data hash */
  hash: string
  /** Secret for data decryption, encrypted with the service's public key */
  secret: string
}
