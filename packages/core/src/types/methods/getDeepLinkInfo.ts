import { ApiRequestOptions, ApiResponse } from '../airgram'
import { DeepLinkInfoUnion } from '../outputs'

export interface GetDeepLinkInfoParams {
  link?: string // The link
}

/**
 * Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature"
 * or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links.
 * Can be called before authorization
 * @param {Object} params
 * @param {string} [params.link] - The link
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetDeepLinkInfoParams, DeepLinkInfoUnion>>}
 */
export type getDeepLinkInfo = (
  params?: GetDeepLinkInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetDeepLinkInfoParams, DeepLinkInfoUnion>>
