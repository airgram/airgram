import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AvailableReactionsUnion } from '../outputs'

export interface GetMessageAvailableReactionsParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
}

/**
 * Returns reactions, which can be added to a message. The list can change after updateReactions,
 * updateChatAvailableReactions for the chat, or updateMessageInteractionInfo for the
 * message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageAvailableReactionsParams, AvailableReactionsUnion>>}
 */
export type getMessageAvailableReactions = (
  params?: GetMessageAvailableReactionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageAvailableReactionsParams, AvailableReactionsUnion>>
