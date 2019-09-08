import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'

export interface GetMessageLinkParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
}

/**
 * Returns a private HTTPS link to a message in a chat. Available only for already sent
 * messages in supergroups and channels. The link will work only for members of the
 * chat
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageLinkParams, HttpUrlUnion>>}
 */
export type getMessageLink<ExtensionT> = (
  params?: GetMessageLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageLinkParams, HttpUrlUnion> & ExtensionT>
