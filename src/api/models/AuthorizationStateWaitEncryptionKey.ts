/** TDLib needs an encryption key to decrypt the local database */
export class AuthorizationStateWaitEncryptionKeyBaseModel {
  public _: 'authorizationStateWaitEncryptionKey'
  /** True, if the database is currently encrypted */
  public isEncrypted: boolean
}
