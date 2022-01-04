/** Suggests the user to set a 2-step verification password to be able to log in again */
export class SuggestedActionSetPasswordBaseModel {
  public _: 'suggestedActionSetPassword'

  /**
   * The number of days to pass between consecutive authorizations if the user declines
   * to set password
   */
  public authorizationDelay: number
}
