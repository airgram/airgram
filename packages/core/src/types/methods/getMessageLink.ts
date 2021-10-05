import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageLinkUnion } from '../outputs'

export interface GetMessageLinkParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
  mediaTimestamp?: number // If not 0, timestamp from which the video/audio/video note/voice note playing must start, in seconds. The media can be in the message content or in its web page preview
  forAlbum?: boolean // Pass true to create a link for the whole media album
  forComment?: boolean // Pass true to create a link to the message as a channel post comment, or from a message thread
}

/**
 * Returns an HTTPS link to a message in a chat. Available only for already sent messages
 * in supergroups and channels, or if message.can_get_media_timestamp_links and a media
 * timestamp link is generated. This is an offline request
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {number} [params.mediaTimestamp] - If not 0, timestamp from which the video/audio/video
 * note/voice note playing must start, in seconds. The media can be in the message content
 * or in its web page preview
 * @param {boolean} [params.forAlbum] - Pass true to create a link for the whole
 * media album
 * @param {boolean} [params.forComment] - Pass true to create a link to the message
 * as a channel post comment, or from a message thread
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageLinkParams, MessageLinkUnion>>}
 */
export type getMessageLink = (
  params?: GetMessageLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageLinkParams, MessageLinkUnion>>
