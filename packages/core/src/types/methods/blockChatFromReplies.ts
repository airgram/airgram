import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface BlockChatFromRepliesParams {
  messageId?: number // The identifier of an incoming message in the Replies chat
  deleteMessage?: boolean // Pass true if the message must be deleted
  deleteAllMessages?: boolean // Pass true if all messages from the same sender must be deleted
  reportSpam?: boolean // Pass true if the sender must be reported to the Telegram moderators
}

/**
 * Blocks an original sender of a message in the Replies chat
 * @param {Object} params
 * @param {number} [params.messageId] - The identifier of an incoming message in
 * the Replies chat
 * @param {boolean} [params.deleteMessage] - Pass true if the message must be deleted
 * @param {boolean} [params.deleteAllMessages] - Pass true if all messages from the
 * same sender must be deleted
 * @param {boolean} [params.reportSpam] - Pass true if the sender must be reported
 * to the Telegram moderators
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<BlockChatFromRepliesParams, OkUnion>>}
 */
export type blockChatFromReplies = (
  params?: BlockChatFromRepliesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<BlockChatFromRepliesParams, OkUnion>>
