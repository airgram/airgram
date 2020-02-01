import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'



/**
 * Uses current user IP to found their country. Returns two-letter ISO 3166-1 alpha-2
 * country code. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, TextUnion>>}
 */
export type getCountryCode = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, TextUnion>>
