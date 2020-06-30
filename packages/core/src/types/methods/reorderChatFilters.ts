import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ReorderChatFiltersParams {
  chatFilterIds?: number[] // Identifiers of chat filters in the new correct order
}

/**
 * Changes the order of chat filters
 * @param {Object} params
 * @param {number[]} [params.chatFilterIds] - Identifiers of chat filters in the
 * new correct order
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReorderChatFiltersParams, OkUnion>>}
 */
export type reorderChatFilters = (
  params?: ReorderChatFiltersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReorderChatFiltersParams, OkUnion>>
