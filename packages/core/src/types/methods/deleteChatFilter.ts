import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteChatFilterParams {
  chatFilterId?: number // Chat filter identifier
}

/**
 * Deletes existing chat filter
 * @param {Object} params
 * @param {number} [params.chatFilterId] - Chat filter identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatFilterParams, OkUnion>>}
 */
export type deleteChatFilter = (
  params?: DeleteChatFilterParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteChatFilterParams, OkUnion>>
