import { OkUnion } from '../outputs'

/**
 * Succeeds after a specified amount of time has passed. Can be called before authorization.
 * Can be called before initialization
 * @param {Object} params
 * @param {number} [params.seconds] - Number of seconds before the function returns
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetAlarmMethod = <ResponseT = OkUnion>(
  params: SetAlarmParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetAlarmParams {
  /** Number of seconds before the function returns */
  seconds?: number
}
