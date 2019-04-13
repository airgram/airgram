import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Removes an animation from the list of saved animations
 * @param {Object} params
 * @param {InputFileInputUnion} [params.animation] - Animation file to be removed
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveSavedAnimationMethod = <ResponseT = OkUnion>(
  params: RemoveSavedAnimationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveSavedAnimationParams {
  /** Animation file to be removed */
  animation?: InputFileInputUnion
}
