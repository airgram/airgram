import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageUnion } from '../outputs'

export interface GetCallbackQueryMessageParams {
  chatId?: number // Identifier of the chat the message belongs to
  messageId?: number // Message identifier
  callbackQueryId?: string // Identifier of the callback query
}

/**
 * Returns information about a message with the callback button that originated a callback
 * query; for bots only
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Message identifier
 * @param {string} [params.callbackQueryId] - Identifier of the callback query
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetCallbackQueryMessageParams, MessageUnion>>}
 */
export type getCallbackQueryMessage = (
  params?: GetCallbackQueryMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetCallbackQueryMessageParams, MessageUnion>>
