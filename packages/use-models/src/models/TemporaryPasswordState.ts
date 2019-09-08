/**
 * Returns information about the availability of a temporary password, which can be
 * used for payments
 */
export class TemporaryPasswordStateBaseModel {
  public _: 'temporaryPasswordState'

  /** True, if a temporary password is available */
  public hasPassword: boolean

  /** Time left before the temporary password expires, in seconds */
  public validFor: number
}
