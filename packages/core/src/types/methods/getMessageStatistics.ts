import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageStatisticsUnion } from '../outputs'

export interface GetMessageStatisticsParams {
  chatId?: number // Chat identifier
  messageId?: number // Message identifier
  isDark?: boolean // Pass true if a dark theme is used by the application
}

/**
 * Returns detailed statistics about a message. Can be used only if Message.can_get_statistics
 * == true. The method is under development and may or may not work
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageId] - Message identifier
 * @param {boolean} [params.isDark] - Pass true if a dark theme is used by the application
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageStatisticsParams, MessageStatisticsUnion>>}
 */
export type getMessageStatistics = (
  params?: GetMessageStatisticsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageStatisticsParams, MessageStatisticsUnion>>
