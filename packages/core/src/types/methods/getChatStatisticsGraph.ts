import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StatisticsGraphUnion } from '../outputs'

export interface GetChatStatisticsGraphParams {
  chatId?: number // Chat identifier
  token?: string // The token for graph loading
  x?: number // X-value for zoomed in graph or 0 otherwise
}

/**
 * Loads asynchronous or zoomed in chat statistics graph
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.token] - The token for graph loading
 * @param {number} [params.x] - X-value for zoomed in graph or 0 otherwise
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatStatisticsGraphParams, StatisticsGraphUnion>>}
 */
export type getChatStatisticsGraph = (
  params?: GetChatStatisticsGraphParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatStatisticsGraphParams, StatisticsGraphUnion>>
