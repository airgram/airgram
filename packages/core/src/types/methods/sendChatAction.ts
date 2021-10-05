import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatActionInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SendChatActionParams {
  chatId?: number // Chat identifier
  messageThreadId?: number // If not 0, a message thread identifier in which the action was performed
  action?: ChatActionInputUnion // The action description; pass null to cancel the currently active action
}

/**
 * Sends a notification about user activity in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the action was performed
 * @param {ChatActionInputUnion} [params.action] - The action description; pass null
 * to cancel the currently active action
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendChatActionParams, OkUnion>>}
 */
export type sendChatAction = (
  params?: SendChatActionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendChatActionParams, OkUnion>>
