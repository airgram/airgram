import { ApiRequestOptions, ApiResponse } from '../airgram'
import { RecoveryEmailAddressUnion } from '../outputs'

export interface GetRecoveryEmailAddressParams {
  password?: string // The password for the current user
}

/**
 * Returns a 2-step verification recovery email address that was previously set up.
 * This method can be used to verify a password provided by the user
 * @param {Object} params
 * @param {string} [params.password] - The password for the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRecoveryEmailAddressParams, RecoveryEmailAddressUnion>>}
 */
export type getRecoveryEmailAddress<ExtensionT> = (
  params?: GetRecoveryEmailAddressParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRecoveryEmailAddressParams, RecoveryEmailAddressUnion> & ExtensionT>
