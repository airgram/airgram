import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Manually adds a new animation to the list of saved animations. The new animation
 * is added to the beginning of the list. If the animation was already in the list,
 * it is removed first. Only non-secret video animations with MIME type "video/mp4"
 * can be added to the list
 * @param {Object} params
 * @param {InputFileInputUnion} [params.animation] - The animation file to be added.
 * Only animations known to the server (i.e. successfully sent via a message) can be
 * added to the list
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddSavedAnimationMethod = <ResponseT = OkUnion>(
  params: AddSavedAnimationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddSavedAnimationParams {
  /**
   * The animation file to be added. Only animations known to the server (i.e. successfully
   * sent via a message) can be added to the list
   */
  animation?: InputFileInputUnion
}
