import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ChangeChatReportSpamStateParams {
  chatId?: number // Chat identifier
  isSpamChat?: boolean // If true, the chat will be reported as spam; otherwise it will be marked as not spam
}

/**
 * Reports to the server whether a chat is a spam chat or not. Can be used only if ChatReportSpamState.can_report_spam
 * is true. After this request, ChatReportSpamState.can_report_spam becomes false forever
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isSpamChat] - If true, the chat will be reported as spam;
 * otherwise it will be marked as not spam
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ChangeChatReportSpamStateParams, OkUnion>>}
 */
export type changeChatReportSpamState = (
  params?: ChangeChatReportSpamStateParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ChangeChatReportSpamStateParams, OkUnion>>
