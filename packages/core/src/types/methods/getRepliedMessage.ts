import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageUnion } from '../outputs'

export interface GetRepliedMessageParams {
  chatId?: number // Identifier of the chat the message belongs to
  messageId?: number // Identifier of the message reply to which get
}

/**
 * Returns information about a message that is replied by given message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message reply to which
 * get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRepliedMessageParams, MessageUnion>>}
 */
export type getRepliedMessage<ExtensionT> = (
  params?: GetRepliedMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRepliedMessageParams, MessageUnion> & ExtensionT>
