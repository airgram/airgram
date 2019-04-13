import { SupergroupUnion } from '../outputs'

/**
 * Returns information about a supergroup or channel by its identifier. This is an offline
 * request if the current user is not a bot
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup or channel identifier
 * @param {Object} state
 * @returns {SupergroupUnion}
 */
export type GetSupergroupMethod = <ResponseT = SupergroupUnion>(
  params: GetSupergroupParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetSupergroupParams {
  /** Supergroup or channel identifier */
  supergroupId?: number
}
