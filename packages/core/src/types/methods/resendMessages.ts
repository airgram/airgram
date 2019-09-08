import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'

export interface ResendMessagesParams {
  chatId?: number // Identifier of the chat to send messages
  messageIds?: number[] // Identifiers of the messages to resend. Message identifiers must be in a strictly increasing order
}

/**
 * Resends messages which failed to send. Can be called only for messages for which
 * messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after
 * time passed. If a message is re-sent, the corresponding failed to send message is
 * deleted. Returns the sent messages in the same order as the message identifiers passed
 * in message_ids. If a message can't be re-sent, null will be returned instead of the
 * message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to send messages
 * @param {number[]} [params.messageIds] - Identifiers of the messages to resend.
 * Message identifiers must be in a strictly increasing order
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ResendMessagesParams, MessagesUnion>>}
 */
export type resendMessages<ExtensionT> = (
  params?: ResendMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ResendMessagesParams, MessagesUnion> & ExtensionT>
