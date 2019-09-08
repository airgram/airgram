import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RecoverAuthenticationPasswordParams {
  recoveryCode?: string // Recovery code to check
}

/**
 * Recovers the password with a password recovery code sent to an email address that
 * was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RecoverAuthenticationPasswordParams, OkUnion>>}
 */
export type recoverAuthenticationPassword<ExtensionT> = (
  params?: RecoverAuthenticationPasswordParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RecoverAuthenticationPasswordParams, OkUnion> & ExtensionT>
