import { ApiRequestOptions, ApiResponse } from '../airgram'
import {
  InputMessageContentInputUnion,
  ReplyMarkupInputUnion,
  SendMessageOptionsInput
} from '../inputs'
import { MessageUnion } from '../outputs'

export interface SendMessageParams {
  chatId?: number // Target chat
  replyToMessageId?: number // Identifier of the message to reply to or 0
  options?: SendMessageOptionsInput // Options to be used to send the message
  replyMarkup?: ReplyMarkupInputUnion // Markup for replying to the message; for bots only
  inputMessageContent?: InputMessageContentInputUnion // The content of the message to be sent
}

/**
 * Sends a message. Returns the sent message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of the message to reply
 * to or 0
 * @param {SendMessageOptionsInput} [params.options] - Options to be used to send
 * the message
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
