import { UserUnion } from '../outputs'

/**
 * Returns information about a user by their identifier. This is an offline request
 * if the current user is not a bot
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {UserUnion}
 */
export type GetUserMethod = <ResponseT = UserUnion>(
  params: GetUserParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetUserParams {
  /** User identifier */
  userId?: number
}
