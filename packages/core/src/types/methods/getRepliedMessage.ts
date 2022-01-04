import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageUnion } from '../outputs'

export interface GetRepliedMessageParams {
  chatId?: number // Identifier of the chat the message belongs to
  messageId?: number // Identifier of the reply message
}

/**
 * Returns information about a message that is replied by a given message. Also returns
 * the pinned message, the game message, and the invoice message for messages of the
 * types messagePinMessage, messageGameScore, and messagePaymentSuccessful respectively
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the reply message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRepliedMessageParams, MessageUnion>>}
 */
export type getRepliedMessage = (
  params?: GetRepliedMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRepliedMessageParams, MessageUnion>>
