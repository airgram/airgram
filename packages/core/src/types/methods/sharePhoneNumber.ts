import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SharePhoneNumberParams {
  userId?: number // Identifier of the user with whom to share the phone number. The user must be a mutual contact
}

/**
 * Shares the phone number of the current user with a mutual contact. Supposed to be
 * called when the user clicks on chatActionBarSharePhoneNumber
 * @param {Object} params
 * @param {number} [params.userId] - Identifier of the user with whom to share the
 * phone number. The user must be a mutual contact
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SharePhoneNumberParams, OkUnion>>}
 */
export type sharePhoneNumber = (
  params?: SharePhoneNumberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SharePhoneNumberParams, OkUnion>>
