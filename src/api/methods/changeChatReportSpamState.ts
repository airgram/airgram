import { OkUnion } from '../outputs'

/**
 * Used to let the server know whether a chat is spam or not. Can be used only if ChatReportSpamState.can_report_spam
 * is true. After this request, ChatReportSpamState.can_report_spam becomes false forever
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isSpamChat] - If true, the chat will be reported as spam;
 * otherwise it will be marked as not spam
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ChangeChatReportSpamStateMethod = <ResponseT = OkUnion>(
  params: ChangeChatReportSpamStateParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ChangeChatReportSpamStateParams {
  /** Chat identifier */
  chatId?: number
  /** If true, the chat will be reported as spam; otherwise it will be marked as not spam */
  isSpamChat?: boolean
}
