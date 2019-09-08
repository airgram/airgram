import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatReportSpamStateUnion } from '../outputs'

export interface GetChatReportSpamStateParams {
  chatId?: number // Chat identifier
}

/**
 * Returns information on whether the current chat can be reported as spam
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatReportSpamStateParams, ChatReportSpamStateUnion>>}
 */
export type getChatReportSpamState<ExtensionT> = (
  params?: GetChatReportSpamStateParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatReportSpamStateParams, ChatReportSpamStateUnion> & ExtensionT>
