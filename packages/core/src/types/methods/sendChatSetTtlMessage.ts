import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageUnion } from '../outputs'

export interface SendChatSetTtlMessageParams {
  chatId?: number // Chat identifier
  ttl?: number // New TTL value, in seconds
}

/**
 * Changes the current TTL setting (sets a new self-destruct timer) in a secret chat
 * and sends the corresponding message
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.ttl] - New TTL value, in seconds
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendChatSetTtlMessageParams, MessageUnion>>}
 */
export type sendChatSetTtlMessage<ExtensionT> = (
  params?: SendChatSetTtlMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendChatSetTtlMessageParams, MessageUnion> & ExtensionT>
