import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CloseChatParams {
  chatId?: number // Chat identifier
}

/**
 * Informs TDLib that the chat is closed by the user. Many useful activities depend
 * on the chat being opened or closed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CloseChatParams, OkUnion>>}
 */
export type closeChat<ExtensionT> = (
  params?: CloseChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CloseChatParams, OkUnion> & ExtensionT>
