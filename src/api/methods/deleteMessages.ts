import { OkUnion } from '../outputs'

/**
 * Deletes messages
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number[]} [params.messageIds] - Identifiers of the messages to be deleted
 * @param {boolean} [params.revoke] - Pass true to try to delete outgoing messages
 * for all chat members (may fail if messages are too old). Always true for supergroups,
 * channels and secret chats
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteMessagesMethod = <ResponseT = OkUnion>(
  params: DeleteMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteMessagesParams {
  /** Chat identifier */
  chatId?: number
  /** Identifiers of the messages to be deleted */
  messageIds?: number[]
  /**
   * Pass true to try to delete outgoing messages for all chat members (may fail if messages
   * are too old). Always true for supergroups, channels and secret chats
   */
  revoke?: boolean
}
