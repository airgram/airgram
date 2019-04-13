import { AnimationsUnion } from '../outputs'

/**
 * Returns saved animations
 * @param {Object} state
 * @returns {AnimationsUnion}
 */
export type GetSavedAnimationsMethod = <ResponseT = AnimationsUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
