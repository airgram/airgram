import { OkUnion } from '../outputs'

/**
 * Checks the phone number verification code for Telegram Passport
 * @param {Object} params
 * @param {string} [params.code] - Verification code
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckPhoneNumberVerificationCodeMethod = <ResponseT = OkUnion>(
  params: CheckPhoneNumberVerificationCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckPhoneNumberVerificationCodeParams {
  /** Verification code */
  code?: string
}
