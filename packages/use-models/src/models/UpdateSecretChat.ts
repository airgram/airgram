import { SecretChat } from '@airgram/core'

/**
 * Some data of a secret chat has changed. This update is guaranteed to come before
 * the secret chat identifier is returned to the application
 */
export class UpdateSecretChatBaseModel {
  public _: 'updateSecretChat'

  /** New data about the secret chat */
  public secretChat: SecretChat
}
