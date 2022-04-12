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
  options?: MessageSendOptionsInput // Options to be used to send the messages; pass null to use default options
  inputMessageContents?: InputMessageContentInputUnion[] // Contents of messages to be sent. At most 10 messages can be added to an album
  onlyPreview?: boolean // Pass true to get fake messages instead of actually sending them
}

/**
 * Sends 2-10 messages grouped together into an album. Currently, only audio, document,
 * photo and video messages can be grouped into an album. Documents and audio files
 * can be only grouped in an album with messages of the same type. Returns sent messages
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the messages will be sent
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {MessageSendOptionsInput} [params.options] - Options to be used to send
 * the messages; pass null to use default options
 * @param {InputMessageContentInputUnion[]} [params.inputMessageContents] - Contents
 * of messages to be sent. At most 10 messages can be added to an album
 * @param {boolean} [params.onlyPreview] - Pass true to get fake messages instead
 * of actually sending them
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendMessageAlbumParams, MessagesUnion>>}
 */
export type sendMessageAlbum = (
  params?: SendMessageAlbumParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendMessageAlbumParams, MessagesUnion>>
