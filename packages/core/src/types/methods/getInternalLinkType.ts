import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InternalLinkTypeUnion } from '../outputs'

export interface GetInternalLinkTypeParams {
  link?: string // The link
}

/**
 * Returns information about the type of an internal link. Returns a 404 error if the
 * link is not internal. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.link] - The link
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetInternalLinkTypeParams, InternalLinkTypeUnion>>}
 */
export type getInternalLinkType = (
  params?: GetInternalLinkTypeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetInternalLinkTypeParams, InternalLinkTypeUnion>>
