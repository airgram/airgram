import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface BlockMessageSenderFromRepliesParams {
  messageId?: number // The identifier of an incoming message in the Replies chat
  deleteMessage?: boolean // Pass true to delete the message
  deleteAllMessages?: boolean // Pass true to delete all messages from the same sender
  reportSpam?: boolean // Pass true to report the sender to the Telegram moderators
}

/**
 * Blocks an original sender of a message in the Replies chat
 * @param {Object} params
 * @param {number} [params.messageId] - The identifier of an incoming message in
 * the Replies chat
 * @param {boolean} [params.deleteMessage] - Pass true to delete the message
 * @param {boolean} [params.deleteAllMessages] - Pass true to delete all messages
 * from the same sender
 * @param {boolean} [params.reportSpam] - Pass true to report the sender to the Telegram
 * moderators
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<BlockMessageSenderFromRepliesParams, OkUnion>>}
 */
export type blockMessageSenderFromReplies = (
  params?: BlockMessageSenderFromRepliesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<BlockMessageSenderFromRepliesParams, OkUnion>>
