import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface GetChatParams {
  chatId?: number // Chat identifier
}

/**
 * Returns information about a chat by its identifier, this is an offline request if
 * the current user is not a bot
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatParams, ChatUnion>>}
 */
export type getChat<ExtensionT> = (
  params?: GetChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatParams, ChatUnion> & ExtensionT>
