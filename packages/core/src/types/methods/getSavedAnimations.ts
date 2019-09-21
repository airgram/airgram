import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AnimationsUnion } from '../outputs'

/**
 * Returns saved animations
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AnimationsUnion>>}
 */
export type getSavedAnimations = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AnimationsUnion>>
