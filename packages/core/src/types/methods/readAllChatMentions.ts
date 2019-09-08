import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ReadAllChatMentionsParams {
  chatId?: number // Chat identifier
}

/**
 * Marks all mentions in a chat as read
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReadAllChatMentionsParams, OkUnion>>}
 */
export type readAllChatMentions<ExtensionT> = (
  params?: ReadAllChatMentionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReadAllChatMentionsParams, OkUnion> & ExtensionT>
