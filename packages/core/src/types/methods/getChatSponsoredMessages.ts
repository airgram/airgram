import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SponsoredMessagesUnion } from '../outputs'

export interface GetChatSponsoredMessagesParams {
  chatId?: number // Identifier of the chat
}

/**
 * Returns sponsored messages to be shown in a chat; for channel chats only
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatSponsoredMessagesParams, SponsoredMessagesUnion>>}
 */
export type getChatSponsoredMessages = (
  params?: GetChatSponsoredMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatSponsoredMessagesParams, SponsoredMessagesUnion>>
