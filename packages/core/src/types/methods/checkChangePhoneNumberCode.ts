import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckChangePhoneNumberCodeParams {
  code?: string // Authentication code to check
}

/**
 * Checks the authentication code sent to confirm a new phone number of the user
 * @param {Object} params
 * @param {string} [params.code] - Authentication code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckChangePhoneNumberCodeParams, OkUnion>>}
 */
export type checkChangePhoneNumberCode = (
  params?: CheckChangePhoneNumberCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckChangePhoneNumberCodeParams, OkUnion>>
