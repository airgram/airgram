import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PasswordStateUnion } from '../outputs'

export interface RecoverPasswordParams {
  recoveryCode?: string // Recovery code to check
}

/**
 * Recovers the password using a recovery code sent to an email address that was previously
 * set up
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RecoverPasswordParams, PasswordStateUnion>>}
 */
export type recoverPassword<ExtensionT> = (
  params?: RecoverPasswordParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RecoverPasswordParams, PasswordStateUnion> & ExtensionT>
