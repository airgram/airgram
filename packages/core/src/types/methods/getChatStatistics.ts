import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatStatisticsUnion } from '../outputs'

export interface GetChatStatisticsParams {
  chatId?: number // Chat identifier
  isDark?: boolean // Pass true if a dark theme is used by the app
}

/**
 * Returns detailed statistics about a chat. Currently this method can be used only
 * for channels. Requires administrator rights in the channel
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isDark] - Pass true if a dark theme is used by the app
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatStatisticsParams, ChatStatisticsUnion>>}
 */
export type getChatStatistics = (
  params?: GetChatStatisticsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatStatisticsParams, ChatStatisticsUnion>>
