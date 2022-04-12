import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'

export interface SearchCallMessagesParams {
  fromMessageId?: number // Identifier of the message from which to search; use 0 to get results from the last message
  limit?: number // The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
  onlyMissed?: boolean // Pass true to search only for messages with missed/declined calls
}

/**
 * Searches for call messages. Returns the results in reverse chronological order (i.
 * e., in order of decreasing message_id). For optimal performance, the number of returned
 * messages is chosen by TDLib
 * @param {Object} params
 * @param {number} [params.fromMessageId] - Identifier of the message from which
 * to search; use 0 to get results from the last message
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * up to 100. For optimal performance, the number of returned messages is chosen by
 * TDLib and can be smaller than the specified limit
 * @param {boolean} [params.onlyMissed] - Pass true to search only for messages with
 * missed/declined calls
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchCallMessagesParams, MessagesUnion>>}
 */
export type searchCallMessages = (
  params?: SearchCallMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchCallMessagesParams, MessagesUnion>>
