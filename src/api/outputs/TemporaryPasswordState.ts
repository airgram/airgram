export type TemporaryPasswordStateUnion = TemporaryPasswordState

/**
 * Returns information about the availability of a temporary password, which can be
 * used for payments
 */
export interface TemporaryPasswordState {
  _: 'temporaryPasswordState'
  /** True, if a temporary password is available */
  hasPassword: boolean
  /** Time left before the temporary password expires, in seconds */
  validFor: number
}
