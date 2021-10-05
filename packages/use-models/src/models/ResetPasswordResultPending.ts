/** The password reset request is pending */
export class ResetPasswordResultPendingBaseModel {
  public _: 'resetPasswordResultPending'

  /**
   * Point in time (Unix timestamp) after which the password can be reset immediately
   * using resetPassword
   */
  public pendingResetDate: number
}
