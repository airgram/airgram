/** Represents result of 2-step verification password reset */
export type ResetPasswordResultUnion = ResetPasswordResultOk
  | ResetPasswordResultPending
  | ResetPasswordResultDeclined

/** The password was reset */
export interface ResetPasswordResultOk {
  _: 'resetPasswordResultOk'
}

/** The password reset request is pending */
export interface ResetPasswordResultPending {
  _: 'resetPasswordResultPending'
  /**
   * Point in time (Unix timestamp) after which the password can be reset immediately
   * using resetPassword
   */
  pendingResetDate: number
}

/** The password reset request was declined */
export interface ResetPasswordResultDeclined {
  _: 'resetPasswordResultDeclined'
  /** Point in time (Unix timestamp) when the password reset can be retried */
  retryDate: number
}
