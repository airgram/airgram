import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PasswordStateUnion } from '../outputs'

export interface RecoverPasswordParams {
  recoveryCode?: string // Recovery code to check
  newPassword?: string // New password of the user; may be empty to remove the password
  newHint?: string // New password hint; may be empty
}

/**
 * Recovers the 2-step verification password using a recovery code sent to an email
 * address that was previously set up
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {string} [params.newPassword] - New password of the user; may be empty
 * to remove the password
 * @param {string} [params.newHint] - New password hint; may be empty
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RecoverPasswordParams, PasswordStateUnion>>}
 */
export type recoverPassword = (
  params?: RecoverPasswordParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RecoverPasswordParams, PasswordStateUnion>>
