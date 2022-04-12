import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ProcessChatJoinRequestParams {
  chatId?: number // Chat identifier
  userId?: number // Identifier of the user that sent the request
  approve?: boolean // Pass true to approve the request; pass false to decline it
}

/**
 * Handles a pending join request in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - Identifier of the user that sent the request
 * @param {boolean} [params.approve] - Pass true to approve the request; pass false
 * to decline it
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ProcessChatJoinRequestParams, OkUnion>>}
 */
export type processChatJoinRequest = (
  params?: ProcessChatJoinRequestParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ProcessChatJoinRequestParams, OkUnion>>
