import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'

export interface GetChatStatisticsUrlParams {
  chatId?: number // Chat identifier
  parameters?: string // Parameters from "tg://statsrefresh?params=******" link
  isDark?: boolean // Pass true if a URL with the dark theme must be returned
}

/**
 * Returns an HTTP URL with the chat statistics. Currently this method can be used only
 * for channels
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.parameters] - Parameters from "tg://statsrefresh?params=******"
 * link
 * @param {boolean} [params.isDark] - Pass true if a URL with the dark theme must
 * be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatStatisticsUrlParams, HttpUrlUnion>>}
 */
export type getChatStatisticsUrl = (
  params?: GetChatStatisticsUrlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatStatisticsUrlParams, HttpUrlUnion>>
