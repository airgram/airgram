import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'

export interface GetMessageThreadHistoryParams {
  chatId?: number // Chat identifier
  messageId?: number // Message identifier, which thread history needs to be returned
  fromMessageId?: number // Identifier of the message starting from which history must be fetched; use 0 to get results from the last message
  offset?: number // Specify 0 to get results from exactly the from_message_id or a negative offset up to 99 to get additionally some newer messages
  limit?: number // The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset. Fewer messages may be returned than specified by the limit, even if the end of the message thread history has not been reached
}

/**
 * Returns messages in a message thread of a message. Can be used only if message.can_get_message_thread
 * == true. Message thread of a channel message is in the channel's linked supergroup.
 * The messages are returned in a reverse chronological order (i.e., in order of decreasing
 * message_id). For optimal performance the number of returned messages is chosen by
 * the library
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageId] - Message identifier, which thread history
 * needs to be returned
 * @param {number} [params.fromMessageId] - Identifier of the message starting from
 * which history must be fetched; use 0 to get results from the last message
 * @param {number} [params.offset] - Specify 0 to get results from exactly the from_message_id
 * or a negative offset up to 99 to get additionally some newer messages
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * must be positive and can't be greater than 100. If the offset is negative, the limit
 * must be greater than or equal to -offset. Fewer messages may be returned than specified
 * by the limit, even if the end of the message thread history has not been reached
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageThreadHistoryParams, MessagesUnion>>}
 */
export type getMessageThreadHistory = (
  params?: GetMessageThreadHistoryParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageThreadHistoryParams, MessagesUnion>>
