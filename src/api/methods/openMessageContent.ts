import { OkUnion } from '../outputs'

/**
 * This method should be called if the message content has been opened (e.g., the user
 * has opened a photo, video, document, location or venue, or has listened to an audio
 * file or voice note message). An updateMessageContentOpened update will be generated
 * if something has changed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the message
 * @param {number} [params.messageId] - Identifier of the message with the opened
 * content
 * @param {Object} state
 * @returns {OkUnion}
 */
export type OpenMessageContentMethod = <ResponseT = OkUnion>(
  params: OpenMessageContentParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface OpenMessageContentParams {
  /** Chat identifier of the message */
  chatId?: number
  /** Identifier of the message with the opened content */
  messageId?: number
}
