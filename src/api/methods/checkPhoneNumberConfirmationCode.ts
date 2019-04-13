import { OkUnion } from '../outputs'

/**
 * Checks phone number confirmation code
 * @param {Object} params
 * @param {string} [params.code] - The phone number confirmation code
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckPhoneNumberConfirmationCodeMethod = <ResponseT = OkUnion>(
  params: CheckPhoneNumberConfirmationCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckPhoneNumberConfirmationCodeParams {
  /** The phone number confirmation code */
  code?: string
}
