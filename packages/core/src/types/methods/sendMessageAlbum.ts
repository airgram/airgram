import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion } from '../inputs'
import { MessagesUnion } from '../outputs'

export interface SendMessageAlbumParams {
  chatId?: number // Target chat
  replyToMessageId?: number // Identifier of a message to reply to or 0
  disableNotification?: boolean // Pass true to disable notification for the messages. Not supported in secret chats
  fromBackground?: boolean // Pass true if the messages are sent from the background
  inputMessageContents?: InputMessageContentInputUnion[] // Contents of messages to be sent
}

/**
 * Sends messages grouped together into an album. Currently only photo and video messages
 * can be grouped into an album. Returns sent messages
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * for the messages. Not supported in secret chats
 * @param {boolean} [params.fromBackground] - Pass true if the messages are sent
 * from the background
 * @param {InputMessageContentInputUnion[]} [params.inputMessageContents] - Contents
 * of messages to be sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendMessageAlbumParams, MessagesUnion>>}
 */
export type sendMessageAlbum = (
  params?: SendMessageAlbumParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendMessageAlbumParams, MessagesUnion>>
