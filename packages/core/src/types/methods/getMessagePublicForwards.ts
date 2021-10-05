import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FoundMessagesUnion } from '../outputs'

export interface GetMessagePublicForwardsParams {
  chatId?: number // Chat identifier of the message
  messageId?: number // Message identifier
  offset?: string // Offset of the first entry to return as received from the previous request; use empty string to get first chunk of results
  limit?: number // The maximum number of messages to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
}

/**
 * Returns forwarded copies of a channel message to different public channels. For optimal
 * performance, the number of returned messages is chosen by TDLib
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the message
 * @param {number} [params.messageId] - Message identifier
 * @param {string} [params.offset] - Offset of the first entry to return as received
 * from the previous request; use empty string to get first chunk of results
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * must be positive and can't be greater than 100. For optimal performance, the number
 * of returned messages is chosen by TDLib and can be smaller than the specified limit
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessagePublicForwardsParams, FoundMessagesUnion>>}
 */
export type getMessagePublicForwards = (
  params?: GetMessagePublicForwardsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessagePublicForwardsParams, FoundMessagesUnion>>
