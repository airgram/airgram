import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckChangePhoneNumberCodeParams {
  code?: string // Verification code received by SMS, phone call or flash call
}

/**
 * Checks the authentication code sent to confirm a new phone number of the user
 * @param {Object} params
 * @param {string} [params.code] - Verification code received by SMS, phone call
 * or flash call
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckChangePhoneNumberCodeParams, OkUnion>>}
 */
export type checkChangePhoneNumberCode<ExtensionT> = (
  params?: CheckChangePhoneNumberCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckChangePhoneNumberCodeParams, OkUnion> & ExtensionT>
