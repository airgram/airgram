import { PublicMessageLinkUnion } from '../outputs'

/**
 * Returns a public HTTPS link to a message. Available only for messages in public supergroups
 * and channels
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {boolean} [params.forAlbum] - Pass true if a link for a whole media album
 * should be returned
 * @param {Object} state
 * @returns {PublicMessageLinkUnion}
 */
export type GetPublicMessageLinkMethod = <ResponseT = PublicMessageLinkUnion>(
  params: GetPublicMessageLinkParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPublicMessageLinkParams {
  /** Identifier of the chat to which the message belongs */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** Pass true if a link for a whole media album should be returned */
  forAlbum?: boolean
}
