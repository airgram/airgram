import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatReportReasonInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ReportChatParams {
  chatId?: number // Chat identifier
  messageIds?: number[] // Identifiers of reported messages, if any
  reason?: ChatReportReasonInputUnion // The reason for reporting the chat
  text?: string // Additional report details; 0-1024 characters
}

/**
 * Reports a chat to the Telegram moderators. A chat can be reported only from the chat
 * action bar, or if this is a private chat with a bot, a private chat with a user sharing
 * their location, a supergroup, or a channel, since other chats can't be checked by
 * moderators
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number[]} [params.messageIds] - Identifiers of reported messages, if any
 * @param {ChatReportReasonInputUnion} [params.reason] - The reason for reporting
 * the chat
 * @param {string} [params.text] - Additional report details; 0-1024 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReportChatParams, OkUnion>>}
 */
export type reportChat = (
  params?: ReportChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReportChatParams, OkUnion>>
