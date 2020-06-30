import { ApiRequestOptions, ApiResponse } from '../airgram'
import { RecommendedChatFiltersUnion } from '../outputs'



/**
 * Returns recommended chat filters for the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, RecommendedChatFiltersUnion>>}
 */
export type getRecommendedChatFilters = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, RecommendedChatFiltersUnion>>
