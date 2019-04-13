import { OkUnion } from '../outputs'

/**
 * Checks the authentication code sent to confirm a new phone number of the user
 * @param {Object} params
 * @param {string} [params.code] - Verification code received by SMS, phone call
 * or flash call
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckChangePhoneNumberCodeMethod = <ResponseT = OkUnion>(
  params: CheckChangePhoneNumberCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckChangePhoneNumberCodeParams {
  /** Verification code received by SMS, phone call or flash call */
  code?: string
}
