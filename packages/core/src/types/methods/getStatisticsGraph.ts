import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StatisticsGraphUnion } from '../outputs'

export interface GetStatisticsGraphParams {
  chatId?: number // Chat identifier
  token?: string // The token for graph loading
  x?: number // X-value for zoomed in graph or 0 otherwise
}

/**
 * Loads asynchronous or zoomed in chat or message statistics graph
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.token] - The token for graph loading
 * @param {number} [params.x] - X-value for zoomed in graph or 0 otherwise
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetStatisticsGraphParams, StatisticsGraphUnion>>}
 */
export type getStatisticsGraph = (
  params?: GetStatisticsGraphParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetStatisticsGraphParams, StatisticsGraphUnion>>
