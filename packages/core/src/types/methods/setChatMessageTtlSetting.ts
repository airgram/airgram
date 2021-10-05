import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetChatMessageTtlSettingParams {
  chatId?: number // Chat identifier
  ttl?: number // New TTL value, in seconds; must be one of 0, 86400, 7 * 86400, or 31 * 86400 unless the chat is secret
}

/**
 * Changes the message TTL setting (sets a new self-destruct timer) in a chat. Requires
 * can_delete_messages administrator right in basic groups, supergroups and channels
 * Message TTL setting of a chat with the current user (Saved Messages) and the chat
 * 777000 (Telegram) can't be changed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.ttl] - New TTL value, in seconds; must be one of 0, 86400,
 * 7 * 86400, or 31 * 86400 unless the chat is secret
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatMessageTtlSettingParams, OkUnion>>}
 */
export type setChatMessageTtlSetting = (
  params?: SetChatMessageTtlSettingParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatMessageTtlSettingParams, OkUnion>>
