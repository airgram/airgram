import { CallbackQueryPayloadInputUnion } from '../inputs'
import { CallbackQueryAnswerUnion } from '../outputs'

/**
 * Sends a callback query to a bot and returns an answer. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat with the message
 * @param {number} [params.messageId] - Identifier of the message from which the
 * query originated
 * @param {CallbackQueryPayloadInputUnion} [params.payload] - Query payload
 * @param {Object} state
 * @returns {CallbackQueryAnswerUnion}
 */
export type GetCallbackQueryAnswerMethod = <ResponseT = CallbackQueryAnswerUnion>(
  params: GetCallbackQueryAnswerParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetCallbackQueryAnswerParams {
  /** Identifier of the chat with the message */
  chatId?: number
  /** Identifier of the message from which the query originated */
  messageId?: number
  /** Query payload */
  payload?: CallbackQueryPayloadInputUnion
}
