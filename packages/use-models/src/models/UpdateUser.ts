import { User } from '@airgram/core'

/**
 * Some data of a user has changed. This update is guaranteed to come before the user
 * identifier is returned to the application
 */
export class UpdateUserBaseModel {
  public _: 'updateUser'

  /** New data about the user */
  public user: User
}
