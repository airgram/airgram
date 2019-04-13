import { TMeUrlsUnion } from '../outputs'

/**
 * Returns t.me URLs recently visited by a newly registered user
 * @param {Object} params
 * @param {string} [params.referrer] - Google Play referrer to identify the user
 * @param {Object} state
 * @returns {TMeUrlsUnion}
 */
export type GetRecentlyVisitedTMeUrlsMethod = <ResponseT = TMeUrlsUnion>(
  params: GetRecentlyVisitedTMeUrlsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetRecentlyVisitedTMeUrlsParams {
  /** Google Play referrer to identify the user */
  referrer?: string
}
