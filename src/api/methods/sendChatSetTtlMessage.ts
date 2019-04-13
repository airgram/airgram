import { MessageUnion } from '../outputs'

/**
 * Changes the current TTL setting (sets a new self-destruct timer) in a secret chat
 * and sends the corresponding message
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.ttl] - New TTL value, in seconds
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type SendChatSetTtlMessageMethod = <ResponseT = MessageUnion>(
  params: SendChatSetTtlMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendChatSetTtlMessageParams {
  /** Chat identifier */
  chatId?: number
  /** New TTL value, in seconds */
  ttl?: number
}
