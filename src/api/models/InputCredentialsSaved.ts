/**
 * Applies if a user chooses some previously saved payment credentials. To use their
 * previously saved credentials, the user must have a valid temporary password
 */
export class InputCredentialsSavedBaseModel {
  public _: 'inputCredentialsSaved'
  /** Identifier of the saved credentials */
  public savedCredentialsId: string
}
