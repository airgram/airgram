import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckAuthenticationPasswordRecoveryCodeParams {
  recoveryCode?: string // Recovery code to check
}

/**
 * Checks whether a password recovery code sent to an email address is valid. Works
 * only when the current authorization state is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckAuthenticationPasswordRecoveryCodeParams, OkUnion>>}
 */
export type checkAuthenticationPasswordRecoveryCode = (
  params?: CheckAuthenticationPasswordRecoveryCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckAuthenticationPasswordRecoveryCodeParams, OkUnion>>
