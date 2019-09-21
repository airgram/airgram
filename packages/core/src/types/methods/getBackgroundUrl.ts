import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BackgroundTypeInputUnion } from '../inputs'
import { HttpUrlUnion } from '../outputs'

export interface GetBackgroundUrlParams {
  name?: string // Background name
  type?: BackgroundTypeInputUnion // Background type
}

/**
 * Constructs a persistent HTTP URL for a background
 * @param {Object} params
 * @param {string} [params.name] - Background name
 * @param {BackgroundTypeInputUnion} [params.type] - Background type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBackgroundUrlParams, HttpUrlUnion>>}
 */
export type getBackgroundUrl = (
  params?: GetBackgroundUrlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetBackgroundUrlParams, HttpUrlUnion>>
