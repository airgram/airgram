import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'



/**
 * Returns the link for downloading official Telegram application to be used when the
 * current user invites friends to Telegram
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, HttpUrlUnion>>}
 */
export type getApplicationDownloadLink = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, HttpUrlUnion>>
