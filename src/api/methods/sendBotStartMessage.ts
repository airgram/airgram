import { MessageUnion } from '../outputs'

/**
 * Invites a bot to a chat (if it is not yet a member) and sends it the /start command.
 * Bots can't be invited to a private chat other than the chat with the bot. Bots can't
 * be invited to channels (although they can be added as admins) and secret chats. Returns
 * the sent message
 * @param {Object} params
 * @param {number} [params.botUserId] - Identifier of the bot
 * @param {number} [params.chatId] - Identifier of the target chat
 * @param {string} [params.parameter] - A hidden parameter sent to the bot for deep
 * linking purposes (https://api.telegram.org/bots#deep-linking)
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type SendBotStartMessageMethod = <ResponseT = MessageUnion>(
  params: SendBotStartMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendBotStartMessageParams {
  /** Identifier of the bot */
  botUserId?: number
  /** Identifier of the target chat */
  chatId?: number
  /** A hidden parameter sent to the bot for deep linking purposes (https://api.telegram.org/bots#deep-linking) */
  parameter?: string
}
