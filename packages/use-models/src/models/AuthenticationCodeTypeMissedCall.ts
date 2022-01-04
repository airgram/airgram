/**
 * An authentication code is delivered by an immediately canceled call to the specified
 * phone number. The last digits of the phone number that calls are the code that must
 * be entered manually by the user
 */
export class AuthenticationCodeTypeMissedCallBaseModel {
  public _: 'authenticationCodeTypeMissedCall'

  /** Prefix of the phone number from which the call will be made */
  public phoneNumberPrefix: string

  /** Number of digits in the code, excluding the prefix */
  public length: number
}
