/**
 * An authentication code is delivered by an immediately cancelled call to the specified
 * phone number. The number from which the call was made is the code
 */
export class AuthenticationCodeTypeFlashCallBaseModel {
  public _: 'authenticationCodeTypeFlashCall'

  /** Pattern of the phone number from which the call will be made */
  public pattern: string
}
