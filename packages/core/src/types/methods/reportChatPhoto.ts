import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatReportReasonInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ReportChatPhotoParams {
  chatId?: number // Chat identifier
  fileId?: number // Identifier of the photo to report. Only full photos from chatPhoto can be reported
  reason?: ChatReportReasonInputUnion // The reason for reporting the chat photo
  text?: string // Additional report details; 0-1024 characters
}

/**
 * Reports a chat photo to the Telegram moderators. A chat photo can be reported only
 * if chat.can_be_reported
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.fileId] - Identifier of the photo to report. Only full
 * photos from chatPhoto can be reported
 * @param {ChatReportReasonInputUnion} [params.reason] - The reason for reporting
 * the chat photo
 * @param {string} [params.text] - Additional report details; 0-1024 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReportChatPhotoParams, OkUnion>>}
 */
export type reportChatPhoto = (
  params?: ReportChatPhotoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReportChatPhotoParams, OkUnion>>
