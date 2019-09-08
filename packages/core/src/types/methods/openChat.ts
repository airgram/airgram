import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface OpenChatParams {
  chatId?: number // Chat identifier
}

/**
 * Informs TDLib that the chat is opened by the user. Many useful activities depend
 * on the chat being opened or closed (e.g., in supergroups and channels all updates
 * are received only for opened chats)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<OpenChatParams, OkUnion>>}
 */
export type openChat<ExtensionT> = (
  params?: OpenChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<OpenChatParams, OkUnion> & ExtensionT>
