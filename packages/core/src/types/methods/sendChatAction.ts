import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatActionInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SendChatActionParams {
  chatId?: number // Chat identifier
  action?: ChatActionInputUnion // The action description
}

/**
 * Sends a notification about user activity in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatActionInputUnion} [params.action] - The action description
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendChatActionParams, OkUnion>>}
 */
export type sendChatAction<ExtensionT> = (
  params?: SendChatActionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendChatActionParams, OkUnion> & ExtensionT>
