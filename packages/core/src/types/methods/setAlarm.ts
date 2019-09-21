import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetAlarmParams {
  seconds?: number // Number of seconds before the function returns
}

/**
 * Succeeds after a specified amount of time has passed. Can be called before authorization.
 * Can be called before initialization
 * @param {Object} params
 * @param {number} [params.seconds] - Number of seconds before the function returns
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetAlarmParams, OkUnion>>}
 */
export type setAlarm = (
  params?: SetAlarmParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetAlarmParams, OkUnion>>
