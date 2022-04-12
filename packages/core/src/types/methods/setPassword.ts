import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PasswordStateUnion } from '../outputs'

export interface SetPasswordParams {
  oldPassword?: string // Previous password of the user
  newPassword?: string // New password of the user; may be empty to remove the password
  newHint?: string // New password hint; may be empty
  setRecoveryEmailAddress?: boolean // Pass true to change also the recovery email address
  newRecoveryEmailAddress?: string // New recovery email address; may be empty
}

/**
 * Changes the password for the current user. If a new recovery email address is specified,
 * then the change will not be applied until the new recovery email address is confirmed
 * @param {Object} params
 * @param {string} [params.oldPassword] - Previous password of the user
 * @param {string} [params.newPassword] - New password of the user; may be empty
 * to remove the password
 * @param {string} [params.newHint] - New password hint; may be empty
 * @param {boolean} [params.setRecoveryEmailAddress] - Pass true to change also the
 * recovery email address
 * @param {string} [params.newRecoveryEmailAddress] - New recovery email address;
 * may be empty
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPasswordParams, PasswordStateUnion>>}
 */
export type setPassword = (
  params?: SetPasswordParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetPasswordParams, PasswordStateUnion>>
