import { UsersUnion } from '../outputs'

/**
 * Returns users that were blocked by the current user
 * @param {Object} params
 * @param {number} [params.offset] - Number of users to skip in the result; must
 * be non-negative
 * @param {number} [params.limit] - Maximum number of users to return; up to 100
 * @param {Object} state
 * @returns {UsersUnion}
 */
export type GetBlockedUsersMethod = <ResponseT = UsersUnion>(
  params: GetBlockedUsersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetBlockedUsersParams {
  /** Number of users to skip in the result; must be non-negative */
  offset?: number
  /** Maximum number of users to return; up to 100 */
  limit?: number
}
