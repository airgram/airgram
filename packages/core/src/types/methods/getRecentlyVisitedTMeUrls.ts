import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TMeUrlsUnion } from '../outputs'

export interface GetRecentlyVisitedTMeUrlsParams {
  referrer?: string // Google Play referrer to identify the user
}

/**
 * Returns t.me URLs recently visited by a newly registered user
 * @param {Object} params
 * @param {string} [params.referrer] - Google Play referrer to identify the user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRecentlyVisitedTMeUrlsParams, TMeUrlsUnion>>}
 */
export type getRecentlyVisitedTMeUrls = (
  params?: GetRecentlyVisitedTMeUrlsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRecentlyVisitedTMeUrlsParams, TMeUrlsUnion>>
