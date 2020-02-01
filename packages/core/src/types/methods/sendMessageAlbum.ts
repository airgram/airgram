import { ApiRequestOptions, ApiResponse } from '../airgram'
import {
  InputMessageContentInputUnion,
  SendMessageOptionsInput
} from '../inputs'
import { MessagesUnion } from '../outputs'

export interface SendMessageAlbumParams {
  chatId?: number // Target chat
  replyToMessageId?: number // Identifier of a message to reply to or 0
  options?: SendMessageOptionsInput // Options to be used to send the messages
  inputMessageContents?: InputMessageContentInputUnion[] // Contents of messages to be sent
}

/**
 * Sends messages grouped together into an album. Currently only photo and video messages
 * can be grouped into an album. Returns sent messages
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {SendMessageOptionsInput} [params.options] - Options to be used to send
 * the messages
 * @param {InputMessageContentInputUnion[]} [params.inputMessageContents] - Contents
 * of messages to be sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendMessageAlbumParams, MessagesUnion>>}
 */
export type sendMessageAlbum = (
  params?: SendMessageAlbumParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendMessageAlbumParams, MessagesUnion>>
