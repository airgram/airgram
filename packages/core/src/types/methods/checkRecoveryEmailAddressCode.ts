import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PasswordStateUnion } from '../outputs'

export interface CheckRecoveryEmailAddressCodeParams {
  code?: string // Verification code
}

/**
 * Checks the 2-step verification recovery email address verification code
 * @param {Object} params
 * @param {string} [params.code] - Verification code
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckRecoveryEmailAddressCodeParams, PasswordStateUnion>>}
 */
export type checkRecoveryEmailAddressCode<ExtensionT> = (
  params?: CheckRecoveryEmailAddressCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckRecoveryEmailAddressCodeParams, PasswordStateUnion> & ExtensionT>
