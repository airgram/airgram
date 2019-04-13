import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Re-sends the authentication code sent to confirm a new phone number for the user.
 * Works only if the previously received authenticationCodeInfo next_code_type was not
 * null
 * @param {Object} state
 * @returns {AuthenticationCodeInfoUnion}
 */
export type ResendChangePhoneNumberCodeMethod = <ResponseT = AuthenticationCodeInfoUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
