import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FoundMessagesUnion } from '../outputs'

export interface SearchOutgoingDocumentMessagesParams {
  query?: string // Query to search for in document file name and message caption
  limit?: number // The maximum number of messages to be returned; up to 100
}

/**
 * Searches for outgoing messages with content of the type messageDocument in all chats
 * except secret chats. Returns the results in reverse chronological order
 * @param {Object} params
 * @param {string} [params.query] - Query to search for in document file name and
 * message caption
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * up to 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchOutgoingDocumentMessagesParams, FoundMessagesUnion>>}
 */
export type searchOutgoingDocumentMessages = (
  params?: SearchOutgoingDocumentMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchOutgoingDocumentMessagesParams, FoundMessagesUnion>>
