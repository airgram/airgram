import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageUnion } from '../outputs'

export interface GetMessageParams {
  chatId?: number // Identifier of the chat the message belongs to
  messageId?: number // Identifier of the message to get
}

/**
 * Returns information about a message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message to get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageParams, MessageUnion>>}
 */
export type getMessage<ExtensionT> = (
  params?: GetMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageParams, MessageUnion> & ExtensionT>
