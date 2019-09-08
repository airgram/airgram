import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PublicMessageLinkUnion } from '../outputs'

export interface GetPublicMessageLinkParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
  forAlbum?: boolean // Pass true if a link for a whole media album should be returned
}

/**
 * Returns a public HTTPS link to a message. Available only for messages in supergroups
 * and channels with username
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {boolean} [params.forAlbum] - Pass true if a link for a whole media album
 * should be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPublicMessageLinkParams, PublicMessageLinkUnion>>}
 */
export type getPublicMessageLink<ExtensionT> = (
  params?: GetPublicMessageLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPublicMessageLinkParams, PublicMessageLinkUnion> & ExtensionT>
