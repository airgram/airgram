import { OkUnion } from '../outputs'

/**
 * Adds a user to the blacklist
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type BlockUserMethod = <ResponseT = OkUnion>(
  params: BlockUserParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface BlockUserParams {
  /** User identifier */
  userId?: number
}
