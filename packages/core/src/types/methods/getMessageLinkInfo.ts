import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageLinkInfoUnion } from '../outputs'

export interface GetMessageLinkInfoParams {
  url?: string // The message link
}

/**
 * Returns information about a public or private message link. Can be called for any
 * internal link of the type internalLinkTypeMessage
 * @param {Object} params
 * @param {string} [params.url] - The message link
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageLinkInfoParams, MessageLinkInfoUnion>>}
 */
export type getMessageLinkInfo = (
  params?: GetMessageLinkInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageLinkInfoParams, MessageLinkInfoUnion>>
