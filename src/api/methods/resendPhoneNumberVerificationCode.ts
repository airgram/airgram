import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Re-sends the code to verify a phone number to be added to a user's Telegram Passport
 * @param {Object} state
 * @returns {AuthenticationCodeInfoUnion}
 */
export type ResendPhoneNumberVerificationCodeMethod = <ResponseT = AuthenticationCodeInfoUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
