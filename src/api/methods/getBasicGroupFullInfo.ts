import { BasicGroupFullInfoUnion } from '../outputs'

/**
 * Returns full information about a basic group by its identifier
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Basic group identifier
 * @param {Object} state
 * @returns {BasicGroupFullInfoUnion}
 */
export type GetBasicGroupFullInfoMethod = <ResponseT = BasicGroupFullInfoUnion>(
  params: GetBasicGroupFullInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetBasicGroupFullInfoParams {
  /** Basic group identifier */
  basicGroupId?: number
}
