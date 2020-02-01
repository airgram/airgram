import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveChatActionBarParams {
  chatId?: number // Chat identifier
}

/**
 * Removes a chat action bar without any other action
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveChatActionBarParams, OkUnion>>}
 */
export type removeChatActionBar = (
  params?: RemoveChatActionBarParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveChatActionBarParams, OkUnion>>
