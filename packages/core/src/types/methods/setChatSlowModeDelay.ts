import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetChatSlowModeDelayParams {
  chatId?: number // Chat identifier
  slowModeDelay?: number // New slow mode delay for the chat, in seconds; must be one of 0, 10, 30, 60, 300, 900, 3600
}

/**
 * Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members
 * rights
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.slowModeDelay] - New slow mode delay for the chat, in
 * seconds; must be one of 0, 10, 30, 60, 300, 900, 3600
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatSlowModeDelayParams, OkUnion>>}
 */
export type setChatSlowModeDelay = (
  params?: SetChatSlowModeDelayParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatSlowModeDelayParams, OkUnion>>
