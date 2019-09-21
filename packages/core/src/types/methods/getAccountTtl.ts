import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AccountTtlUnion } from '../outputs'

/**
 * Returns the period of inactivity after which the account of the current user will
 * automatically be deleted
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AccountTtlUnion>>}
 */
export type getAccountTtl = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AccountTtlUnion>>
