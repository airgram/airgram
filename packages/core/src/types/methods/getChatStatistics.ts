import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatStatisticsUnion } from '../outputs'

export interface GetChatStatisticsParams {
  chatId?: number // Chat identifier
  isDark?: boolean // Pass true if a dark theme is used by the application
}

/**
 * Returns detailed statistics about a chat. Currently, this method can be used only
 * for supergroups and channels. Can be used only if supergroupFullInfo.can_get_statistics
 * == true
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isDark] - Pass true if a dark theme is used by the application
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatStatisticsParams, ChatStatisticsUnion>>}
 */
export type getChatStatistics = (
  params?: GetChatStatisticsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatStatisticsParams, ChatStatisticsUnion>>
