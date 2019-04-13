import { SupergroupFullInfoUnion } from '../outputs'

/**
 * Returns full information about a supergroup or channel by its identifier, cached
 * for up to 1 minute
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup or channel identifier
 * @param {Object} state
 * @returns {SupergroupFullInfoUnion}
 */
export type GetSupergroupFullInfoMethod = <ResponseT = SupergroupFullInfoUnion>(
  params: GetSupergroupFullInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetSupergroupFullInfoParams {
  /** Supergroup or channel identifier */
  supergroupId?: number
}
