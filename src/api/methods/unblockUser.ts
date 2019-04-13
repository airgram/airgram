import { OkUnion } from '../outputs'

/**
 * Removes a user from the blacklist
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type UnblockUserMethod = <ResponseT = OkUnion>(
  params: UnblockUserParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface UnblockUserParams {
  /** User identifier */
  userId?: number
}
