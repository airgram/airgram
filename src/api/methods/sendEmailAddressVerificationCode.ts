import { EmailAddressAuthenticationCodeInfoUnion } from '../outputs'

/**
 * Sends a code to verify an email address to be added to a user's Telegram Passport
 * @param {Object} params
 * @param {string} [params.emailAddress] - Email address
 * @param {Object} state
 * @returns {EmailAddressAuthenticationCodeInfoUnion}
 */
export type SendEmailAddressVerificationCodeMethod = <ResponseT = EmailAddressAuthenticationCodeInfoUnion>(
  params: SendEmailAddressVerificationCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendEmailAddressVerificationCodeParams {
  /** Email address */
  emailAddress?: string
}
