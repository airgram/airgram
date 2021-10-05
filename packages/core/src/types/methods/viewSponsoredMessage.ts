import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ViewSponsoredMessageParams {
  chatId?: number // Identifier of the chat with the sponsored message
  sponsoredMessageId?: number // The identifier of the sponsored message being viewed
}

/**
 * Informs TDLib that a sponsored message was viewed by the user
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat with the sponsored message
 * @param {number} [params.sponsoredMessageId] - The identifier of the sponsored
 * message being viewed
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ViewSponsoredMessageParams, OkUnion>>}
 */
export type viewSponsoredMessage = (
  params?: ViewSponsoredMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ViewSponsoredMessageParams, OkUnion>>
