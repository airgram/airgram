import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetMessageEmbeddingCodeParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
  forAlbum?: boolean // Pass true to return an HTML code for embedding of the whole media album
}

/**
 * Returns an HTML code for embedding the message. Available only for messages in supergroups
 * and channels with a username
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {boolean} [params.forAlbum] - Pass true to return an HTML code for embedding
 * of the whole media album
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageEmbeddingCodeParams, TextUnion>>}
 */
export type getMessageEmbeddingCode = (
  params?: GetMessageEmbeddingCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageEmbeddingCodeParams, TextUnion>>
