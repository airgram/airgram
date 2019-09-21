import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface OpenMessageContentParams {
  chatId?: number // Chat identifier of the message
  messageId?: number // Identifier of the message with the opened content
}

/**
 * Informs TDLib that the message content has been opened (e.g., the user has opened
 * a photo, video, document, location or venue, or has listened to an audio file or
 * voice note message). An updateMessageContentOpened update will be generated if something
 * has changed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the message
 * @param {number} [params.messageId] - Identifier of the message with the opened
 * content
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<OpenMessageContentParams, OkUnion>>}
 */
export type openMessageContent = (
  params?: OpenMessageContentParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<OpenMessageContentParams, OkUnion>>
