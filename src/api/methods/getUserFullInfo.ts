import { UserFullInfoUnion } from '../outputs'

/**
 * Returns full information about a user by their identifier
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {UserFullInfoUnion}
 */
export type GetUserFullInfoMethod = <ResponseT = UserFullInfoUnion>(
  params: GetUserFullInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetUserFullInfoParams {
  /** User identifier */
  userId?: number
}
