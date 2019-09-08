import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PasswordStateUnion } from '../outputs'

export interface SetRecoveryEmailAddressParams {
  password?: string // Password of the current user
  newRecoveryEmailAddress?: string // New recovery email address
}

/**
 * Changes the 2-step verification recovery email address of the user. If a new recovery
 * email address is specified, then the change will not be applied until the new recovery
 * email address is confirmed. If new_recovery_email_address is the same as the email
 * address that is currently set up, this call succeeds immediately and aborts all other
 * requests waiting for an email confirmation
 * @param {Object} params
 * @param {string} [params.password] - Password of the current user
 * @param {string} [params.newRecoveryEmailAddress] - New recovery email address
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetRecoveryEmailAddressParams, PasswordStateUnion>>}
 */
export type setRecoveryEmailAddress<ExtensionT> = (
  params?: SetRecoveryEmailAddressParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetRecoveryEmailAddressParams, PasswordStateUnion> & ExtensionT>
