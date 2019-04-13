import { LocationInput } from '../inputs'
import { InlineQueryResultsUnion } from '../outputs'

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
 * @param {Object} state
 * @returns {InlineQueryResultsUnion}
 */
export type GetInlineQueryResultsMethod = <ResponseT = InlineQueryResultsUnion>(
  params: GetInlineQueryResultsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetInlineQueryResultsParams {
  /** The identifier of the target bot */
  botUserId?: number
  /** Identifier of the chat, where the query was sent */
  chatId?: number
  /** Location of the user, only if needed */
  userLocation?: LocationInput
  /** Text of the query */
  query?: string
  /** Offset of the first entry to return */
  offset?: string
}
