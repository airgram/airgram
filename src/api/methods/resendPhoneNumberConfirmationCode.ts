import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Resends phone number confirmation code
 * @param {Object} state
 * @returns {AuthenticationCodeInfoUnion}
 */
export type ResendPhoneNumberConfirmationCodeMethod = <ResponseT = AuthenticationCodeInfoUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
