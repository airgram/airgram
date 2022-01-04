/**
 * An authentication code is delivered by an immediately canceled call to the specified
 * phone number. The phone number that calls is the code that must be entered automatically
 */
export class AuthenticationCodeTypeFlashCallBaseModel {
  public _: 'authenticationCodeTypeFlashCall'

  /** Pattern of the phone number from which the call will be made */
  public pattern: string
}
