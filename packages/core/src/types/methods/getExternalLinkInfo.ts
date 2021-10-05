import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LoginUrlInfoUnion } from '../outputs'

export interface GetExternalLinkInfoParams {
  link?: string // The link
}

/**
 * Returns information about an action to be done when the current user clicks an external
 * link. Don't use this method for links from secret chats if web page preview is disabled
 * in secret chats
 * @param {Object} params
 * @param {string} [params.link] - The link
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetExternalLinkInfoParams, LoginUrlInfoUnion>>}
 */
export type getExternalLinkInfo = (
  params?: GetExternalLinkInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetExternalLinkInfoParams, LoginUrlInfoUnion>>
