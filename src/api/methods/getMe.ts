import { UserUnion } from '../outputs'

/**
 * Returns the current user
 * @param {Object} state
 * @returns {UserUnion}
 */
export type GetMeMethod = <ResponseT = UserUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
