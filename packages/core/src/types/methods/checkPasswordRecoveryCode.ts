import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckPasswordRecoveryCodeParams {
  recoveryCode?: string // Recovery code to check
}

/**
 * Checks whether a 2-step verification password recovery code sent to an email address
 * is valid
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckPasswordRecoveryCodeParams, OkUnion>>}
 */
export type checkPasswordRecoveryCode = (
  params?: CheckPasswordRecoveryCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckPasswordRecoveryCodeParams, OkUnion>>
