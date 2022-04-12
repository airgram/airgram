import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserUnion } from '../outputs'

export interface SearchUserByPhoneNumberParams {
  phoneNumber?: string // Phone number to search for
}

/**
 * Searches a user by their phone number
 * @param {Object} params
 * @param {string} [params.phoneNumber] - Phone number to search for
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchUserByPhoneNumberParams, UserUnion>>}
 */
export type searchUserByPhoneNumber = (
  params?: SearchUserByPhoneNumberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchUserByPhoneNumberParams, UserUnion>>
