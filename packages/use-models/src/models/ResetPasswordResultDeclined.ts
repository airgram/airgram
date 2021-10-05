/** The password reset request was declined */
export class ResetPasswordResultDeclinedBaseModel {
  public _: 'resetPasswordResultDeclined'

  /** Point in time (Unix timestamp) when the password reset can be retried */
  public retryDate: number
}
