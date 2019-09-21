import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageUnion } from '../outputs'

export interface SendBotStartMessageParams {
  botUserId?: number // Identifier of the bot
  chatId?: number // Identifier of the target chat
  parameter?: string // A hidden parameter sent to the bot for deep linking purposes (https://core.telegram.org/bots#deep-linking)
}

/**
 * Invites a bot to a chat (if it is not yet a member) and sends it the /start command.
 * Bots can't be invited to a private chat other than the chat with the bot. Bots can't
 * be invited to channels (although they can be added as admins) and secret chats. Returns
 * the sent message
 * @param {Object} params
 * @param {number} [params.botUserId] - Identifier of the bot
 * @param {number} [params.chatId] - Identifier of the target chat
 * @param {string} [params.parameter] - A hidden parameter sent to the bot for deep
 * linking purposes (https://core.telegram.org/bots#deep-linking)
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendBotStartMessageParams, MessageUnion>>}
 */
export type sendBotStartMessage = (
  params?: SendBotStartMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendBotStartMessageParams, MessageUnion>>
