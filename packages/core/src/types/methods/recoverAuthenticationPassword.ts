import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RecoverAuthenticationPasswordParams {
  recoveryCode?: string // Recovery code to check
  newPassword?: string // New password of the user; may be empty to remove the password
  newHint?: string // New password hint; may be empty
}

/**
 * Recovers the password with a password recovery code sent to an email address that
 * was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {string} [params.newPassword] - New password of the user; may be empty
 * to remove the password
 * @param {string} [params.newHint] - New password hint; may be empty
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RecoverAuthenticationPasswordParams, OkUnion>>}
 */
export type recoverAuthenticationPassword = (
  params?: RecoverAuthenticationPasswordParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RecoverAuthenticationPasswordParams, OkUnion>>
