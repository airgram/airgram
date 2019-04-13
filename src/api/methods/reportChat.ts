import { ChatReportReasonInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Reports a chat to the Telegram moderators. Supported only for supergroups, channels,
 * or private chats with bots, since other chats can't be checked by moderators
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatReportReasonInputUnion} [params.reason] - The reason for reporting
 * the chat
 * @param {number[]} [params.messageIds] - Identifiers of reported messages, if any
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ReportChatMethod = <ResponseT = OkUnion>(
  params: ReportChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ReportChatParams {
  /** Chat identifier */
  chatId?: number
  /** The reason for reporting the chat */
  reason?: ChatReportReasonInputUnion
  /** Identifiers of reported messages, if any */
  messageIds?: number[]
}
