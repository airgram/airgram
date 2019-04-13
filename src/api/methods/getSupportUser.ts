import { UserUnion } from '../outputs'

/**
 * Returns a user that can be contacted to get support
 * @param {Object} state
 * @returns {UserUnion}
 */
export type GetSupportUserMethod = <ResponseT = UserUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
