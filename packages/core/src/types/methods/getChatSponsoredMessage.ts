import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SponsoredMessageUnion } from '../outputs'

export interface GetChatSponsoredMessageParams {
  chatId?: number // Identifier of the chat
}

/**
 * Returns sponsored message to be shown in a chat; for channel chats only. Returns
 * a 404 error if there is no sponsored message in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatSponsoredMessageParams, SponsoredMessageUnion>>}
 */
export type getChatSponsoredMessage = (
  params?: GetChatSponsoredMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatSponsoredMessageParams, SponsoredMessageUnion>>
