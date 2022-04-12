import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BackgroundsUnion } from '../outputs'

export interface GetBackgroundsParams {
  forDarkTheme?: boolean // Pass true to order returned backgrounds for a dark theme
}

/**
 * Returns backgrounds installed by the user
 * @param {Object} params
 * @param {boolean} [params.forDarkTheme] - Pass true to order returned backgrounds
 * for a dark theme
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBackgroundsParams, BackgroundsUnion>>}
 */
export type getBackgrounds = (
  params?: GetBackgroundsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetBackgroundsParams, BackgroundsUnion>>
