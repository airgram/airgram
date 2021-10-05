import { AuthenticationCodeTypeUnion } from '@airgram/core'

/** Information about the authentication code that was sent */
export class AuthenticationCodeInfoBaseModel {
  public _: 'authenticationCodeInfo'

  /** A phone number that is being authenticated */
  public phoneNumber: string

  /** Describes the way the code was sent to the user */
  public type: AuthenticationCodeTypeUnion

  /** Describes the way the next code will be sent to the user; may be null */
  public nextType?: AuthenticationCodeTypeUnion

  /** Timeout before the code can be re-sent, in seconds */
  public timeout: number
}
