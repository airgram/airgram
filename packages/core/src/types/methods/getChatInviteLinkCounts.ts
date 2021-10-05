import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkCountsUnion } from '../outputs'

export interface GetChatInviteLinkCountsParams {
  chatId?: number // Chat identifier
}

/**
 * Returns list of chat administrators with number of their invite links. Requires owner
 * privileges in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatInviteLinkCountsParams, ChatInviteLinkCountsUnion>>}
 */
export type getChatInviteLinkCounts = (
  params?: GetChatInviteLinkCountsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatInviteLinkCountsParams, ChatInviteLinkCountsUnion>>
