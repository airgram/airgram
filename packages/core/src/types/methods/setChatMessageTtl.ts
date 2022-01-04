import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetChatMessageTtlParams {
  chatId?: number // Chat identifier
  ttl?: number // New TTL value, in seconds; must be one of 0, 86400, 7 * 86400, or 31 * 86400 unless the chat is secret
}

/**
 * Changes the message TTL in a chat. Requires can_delete_messages administrator right
 * in basic groups, supergroups and channels Message TTL can't be changed in a chat
 * with the current user (Saved Messages) and the chat 777000 (Telegram)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.ttl] - New TTL value, in seconds; must be one of 0, 86400,
 * 7 * 86400, or 31 * 86400 unless the chat is secret
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatMessageTtlParams, OkUnion>>}
 */
export type setChatMessageTtl = (
  params?: SetChatMessageTtlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatMessageTtlParams, OkUnion>>
