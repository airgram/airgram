import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckPhoneNumberConfirmationCodeParams {
  code?: string // Confirmation code to check
}

/**
 * Checks phone number confirmation code
 * @param {Object} params
 * @param {string} [params.code] - Confirmation code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckPhoneNumberConfirmationCodeParams, OkUnion>>}
 */
export type checkPhoneNumberConfirmationCode = (
  params?: CheckPhoneNumberConfirmationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckPhoneNumberConfirmationCodeParams, OkUnion>>
