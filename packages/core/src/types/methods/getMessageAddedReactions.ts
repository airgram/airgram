import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AddedReactionsUnion } from '../outputs'

export interface GetMessageAddedReactionsParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
  reaction?: string // If non-empty, only added reactions with the specified text representation will be returned
  offset?: string // Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results
  limit?: number // The maximum number of reactions to be returned; must be positive and can't be greater than 100
}

/**
 * Returns reactions added for a message, along with their sender
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {string} [params.reaction] - If non-empty, only added reactions with the
 * specified text representation will be returned
 * @param {string} [params.offset] - Offset of the first entry to return as received
 * from the previous request; use empty string to get the first chunk of results
 * @param {number} [params.limit] - The maximum number of reactions to be returned;
 * must be positive and can't be greater than 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageAddedReactionsParams, AddedReactionsUnion>>}
 */
export type getMessageAddedReactions = (
  params?: GetMessageAddedReactionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageAddedReactionsParams, AddedReactionsUnion>>
