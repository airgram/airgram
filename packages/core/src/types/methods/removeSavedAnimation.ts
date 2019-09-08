import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface RemoveSavedAnimationParams {
  animation?: InputFileInputUnion // Animation file to be removed
}

/**
 * Removes an animation from the list of saved animations
 * @param {Object} params
 * @param {InputFileInputUnion} [params.animation] - Animation file to be removed
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveSavedAnimationParams, OkUnion>>}
 */
export type removeSavedAnimation<ExtensionT> = (
  params?: RemoveSavedAnimationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveSavedAnimationParams, OkUnion> & ExtensionT>
