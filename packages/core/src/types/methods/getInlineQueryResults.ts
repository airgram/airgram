import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput } from '../inputs'
import { InlineQueryResultsUnion } from '../outputs'

export interface GetInlineQueryResultsParams {
  botUserId?: number // The identifier of the target bot
  chatId?: number // Identifier of the chat, where the query was sent
  userLocation?: LocationInput // Location of the user, only if needed
  query?: string // Text of the query
  offset?: string // Offset of the first entry to return
}

/**
 * Sends an inline query to a bot and returns its results. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 * @param {Object} params
 * @param {number} [params.botUserId] - The identifier of the target bot
 * @param {number} [params.chatId] - Identifier of the chat, where the query was
 * sent
 * @param {LocationInput} [params.userLocation] - Location of the user, only if needed
 * @param {string} [params.query] - Text of the query
 * @param {string} [params.offset] - Offset of the first entry to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetInlineQueryResultsParams, InlineQueryResultsUnion>>}
 */
export type getInlineQueryResults = (
  params?: GetInlineQueryResultsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetInlineQueryResultsParams, InlineQueryResultsUnion>>
