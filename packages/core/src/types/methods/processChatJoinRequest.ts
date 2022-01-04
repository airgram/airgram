import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ProcessChatJoinRequestParams {
  chatId?: number // Chat identifier
  userId?: number // Identifier of the user that sent the request
  approve?: boolean // True, if the request is approved. Otherwise the request is declived
}

/**
 * Handles a pending join request in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - Identifier of the user that sent the request
 * @param {boolean} [params.approve] - True, if the request is approved. Otherwise
 * the request is declived
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ProcessChatJoinRequestParams, OkUnion>>}
 */
export type processChatJoinRequest = (
  params?: ProcessChatJoinRequestParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ProcessChatJoinRequestParams, OkUnion>>
