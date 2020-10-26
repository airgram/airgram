import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageLinkUnion } from '../outputs'

export interface GetMessageLinkParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
  forAlbum?: boolean // Pass true to create a link for the whole media album
  forComment?: boolean // Pass true to create a link to the message as a channel post comment, or from a message thread
}

/**
 * Returns an HTTPS link to a message in a chat. Available only for already sent messages
 * in supergroups and channels. This is an offline request
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
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
