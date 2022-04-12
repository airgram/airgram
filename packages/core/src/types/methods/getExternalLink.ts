import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'

export interface GetExternalLinkParams {
  link?: string // The HTTP link
  allowWriteAccess?: boolean // Pass true if the current user allowed the bot, returned in getExternalLinkInfo, to send them messages
}

/**
 * Returns an HTTP URL which can be used to automatically authorize the current user
 * on a website after clicking an HTTP link. Use the method getExternalLinkInfo to find
 * whether a prior user confirmation is needed
 * @param {Object} params
 * @param {string} [params.link] - The HTTP link
 * @param {boolean} [params.allowWriteAccess] - Pass true if the current user allowed
 * the bot, returned in getExternalLinkInfo, to send them messages
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetExternalLinkParams, HttpUrlUnion>>}
 */
export type getExternalLink = (
  params?: GetExternalLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetExternalLinkParams, HttpUrlUnion>>
