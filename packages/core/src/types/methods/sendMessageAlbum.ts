import { ApiRequestOptions, ApiResponse } from '../airgram'
import {
  InputMessageContentInputUnion,
  MessageSendOptionsInput
} from '../inputs'
import { MessagesUnion } from '../outputs'

export interface SendMessageAlbumParams {
  chatId?: number // Target chat
  messageThreadId?: number // If not 0, a message thread identifier in which the messages will be sent
  replyToMessageId?: number // Identifier of a message to reply to or 0
  options?: MessageSendOptionsInput // Options to be used to send the messages
  inputMessageContents?: InputMessageContentInputUnion[] // Contents of messages to be sent
}

/**
 * Sends messages grouped together into an album. Currently only photo and video messages
 * can be grouped into an album. Returns sent messages
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the messages will be sent
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {MessageSendOptionsInput} [params.options] - Options to be used to send
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
