import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'

export interface GetMessagesParams {
  chatId?: number // Identifier of the chat the messages belong to
  messageIds?: number[] // Identifiers of the messages to get
}

/**
 * Returns information about messages. If a message is not found, returns null on the
 * corresponding position of the result
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the messages belong to
 * @param {number[]} [params.messageIds] - Identifiers of the messages to get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessagesParams, MessagesUnion>>}
 */
export type getMessages<ExtensionT> = (
  params?: GetMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessagesParams, MessagesUnion> & ExtensionT>
