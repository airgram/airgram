import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CallbackQueryPayloadInputUnion } from '../inputs'
import { CallbackQueryAnswerUnion } from '../outputs'

export interface GetCallbackQueryAnswerParams {
  chatId?: number // Identifier of the chat with the message
  messageId?: number // Identifier of the message from which the query originated
  payload?: CallbackQueryPayloadInputUnion // Query payload
}

/**
 * Sends a callback query to a bot and returns an answer. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat with the message
 * @param {number} [params.messageId] - Identifier of the message from which the
 * query originated
 * @param {CallbackQueryPayloadInputUnion} [params.payload] - Query payload
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetCallbackQueryAnswerParams, CallbackQueryAnswerUnion>>}
 */
export type getCallbackQueryAnswer = (
  params?: GetCallbackQueryAnswerParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetCallbackQueryAnswerParams, CallbackQueryAnswerUnion>>
