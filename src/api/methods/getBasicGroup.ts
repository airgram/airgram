import { BasicGroupUnion } from '../outputs'

/**
 * Returns information about a basic group by its identifier. This is an offline request
 * if the current user is not a bot
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Basic group identifier
 * @param {Object} state
 * @returns {BasicGroupUnion}
 */
export type GetBasicGroupMethod = <ResponseT = BasicGroupUnion>(
  params: GetBasicGroupParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetBasicGroupParams {
  /** Basic group identifier */
  basicGroupId?: number
}
