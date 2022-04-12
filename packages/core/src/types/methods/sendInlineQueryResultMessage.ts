import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSendOptionsInput } from '../inputs'
import { MessageUnion } from '../outputs'

export interface SendInlineQueryResultMessageParams {
  chatId?: number // Target chat
  messageThreadId?: number // If not 0, a message thread identifier in which the message will be sent
  replyToMessageId?: number // Identifier of a message to reply to or 0
  options?: MessageSendOptionsInput // Options to be used to send the message; pass null to use default options
  queryId?: string // Identifier of the inline query
  resultId?: string // Identifier of the inline result
  hideViaBot?: boolean // Pass true to hide the bot, via which the message is sent. Can be used only for bots GetOption("animation_search_bot_username"), GetOption("photo_search_bot_username"), and GetOption("venue_search_bot_username")
}

/**
 * Sends the result of an inline query as a message. Returns the sent message. Always
 * clears a chat draft message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the message will be sent
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {MessageSendOptionsInput} [params.options] - Options to be used to send
 * the message; pass null to use default options
 * @param {string} [params.queryId] - Identifier of the inline query
 * @param {string} [params.resultId] - Identifier of the inline result
 * @param {boolean} [params.hideViaBot] - Pass true to hide the bot, via which the
 * message is sent. Can be used only for bots GetOption("animation_search_bot_username"),
 * GetOption("photo_search_bot_username"), and GetOption("venue_search_bot_username")
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendInlineQueryResultMessageParams, MessageUnion>>}
 */
export type sendInlineQueryResultMessage = (
  params?: SendInlineQueryResultMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendInlineQueryResultMessageParams, MessageUnion>>
