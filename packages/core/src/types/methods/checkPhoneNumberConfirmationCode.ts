import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckPhoneNumberConfirmationCodeParams {
  code?: string // The phone number confirmation code
}

/**
 * Checks phone number confirmation code
 * @param {Object} params
 * @param {string} [params.code] - The phone number confirmation code
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckPhoneNumberConfirmationCodeParams, OkUnion>>}
 */
export type checkPhoneNumberConfirmationCode<ExtensionT> = (
  params?: CheckPhoneNumberConfirmationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckPhoneNumberConfirmationCodeParams, OkUnion> & ExtensionT>
