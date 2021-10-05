import { AuthenticationCodeTypeUnion } from './index'

export type AuthenticationCodeInfoUnion = AuthenticationCodeInfo

/** Information about the authentication code that was sent */
export interface AuthenticationCodeInfo {
  _: 'authenticationCodeInfo'
  /** A phone number that is being authenticated */
  phoneNumber: string
  /** Describes the way the code was sent to the user */
  type: AuthenticationCodeTypeUnion
  /** Describes the way the next code will be sent to the user; may be null */
  nextType?: AuthenticationCodeTypeUnion
  /** Timeout before the code can be re-sent, in seconds */
  timeout: number
}
