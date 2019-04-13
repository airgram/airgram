import { OkUnion } from '../outputs'

/**
 * Checks the email address verification code for Telegram Passport
 * @param {Object} params
 * @param {string} [params.code] - Verification code
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckEmailAddressVerificationCodeMethod = <ResponseT = OkUnion>(
  params: CheckEmailAddressVerificationCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckEmailAddressVerificationCodeParams {
  /** Verification code */
  code?: string
}
