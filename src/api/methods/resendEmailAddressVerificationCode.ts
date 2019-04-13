import { EmailAddressAuthenticationCodeInfoUnion } from '../outputs'

/**
 * Re-sends the code to verify an email address to be added to a user's Telegram Passport
 * @param {Object} state
 * @returns {EmailAddressAuthenticationCodeInfoUnion}
 */
export type ResendEmailAddressVerificationCodeMethod = <ResponseT = EmailAddressAuthenticationCodeInfoUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
