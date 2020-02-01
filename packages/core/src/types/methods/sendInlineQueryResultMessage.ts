import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SendMessageOptionsInput } from '../inputs'
import { MessageUnion } from '../outputs'

export interface SendInlineQueryResultMessageParams {
  chatId?: number // Target chat
  replyToMessageId?: number // Identifier of a message to reply to or 0
  options?: SendMessageOptionsInput // Options to be used to send the message
  queryId?: string // Identifier of the inline query
  resultId?: string // Identifier of the inline result
  hideViaBot?: boolean // If true, there will be no mention of a bot, via which the message is sent. Can be used only for bots GetOption("animation_search_bot_username"), GetOption("photo_search_bot_username") and GetOption("venue_search_bot_username")
}

/**
 * Sends the result of an inline query as a message. Returns the sent message. Always
 * clears a chat draft message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {SendMessageOptionsInput} [params.options] - Options to be used to send
 * the message
 * @param {string} [params.queryId] - Identifier of the inline query
 * @param {string} [params.resultId] - Identifier of the inline result
 * @param {boolean} [params.hideViaBot] - If true, there will be no mention of a
 * bot, via which the message is sent. Can be used only for bots GetOption("animation_search_bot_username"),
 * GetOption("photo_search_bot_username") and GetOption("venue_search_bot_username")
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendInlineQueryResultMessageParams, MessageUnion>>}
 */
export type sendInlineQueryResultMessage = (
  params?: SendInlineQueryResultMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendInlineQueryResultMessageParams, MessageUnion>>
