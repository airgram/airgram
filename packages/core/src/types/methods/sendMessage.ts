import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface SendMessageParams {
  chatId?: number // Target chat
  replyToMessageId?: number // Identifier of the message to reply to or 0
  disableNotification?: boolean // Pass true to disable notification for the message. Not supported in secret chats
  fromBackground?: boolean // Pass true if the message is sent from the background
  replyMarkup?: ReplyMarkupInputUnion // Markup for replying to the message; for bots only
  inputMessageContent?: InputMessageContentInputUnion // The content of the message to be sent
}

/**
 * Sends a message. Returns the sent message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of the message to reply
 * to or 0
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * for the message. Not supported in secret chats
 * @param {boolean} [params.fromBackground] - Pass true if the message is sent from
 * the background
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - Markup for replying to the
 * message; for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - The content
 * of the message to be sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendMessageParams, MessageUnion>>}
 */
export type sendMessage = (
  params?: SendMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendMessageParams, MessageUnion>>
