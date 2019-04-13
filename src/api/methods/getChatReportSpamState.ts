import { ChatReportSpamStateUnion } from '../outputs'

/**
 * Returns information on whether the current chat can be reported as spam
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {ChatReportSpamStateUnion}
 */
export type GetChatReportSpamStateMethod = <ResponseT = ChatReportSpamStateUnion>(
  params: GetChatReportSpamStateParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatReportSpamStateParams {
  /** Chat identifier */
  chatId?: number
}
