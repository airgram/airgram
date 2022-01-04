import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetInactiveSessionTtlParams {
  inactiveSessionTtlDays?: number // New number of days of inactivity before sessions will be automatically terminated; 1-366 days
}

/**
 * Changes the period of inactivity after which sessions will automatically be terminated
 * @param {Object} params
 * @param {number} [params.inactiveSessionTtlDays] - New number of days of inactivity
 * before sessions will be automatically terminated; 1-366 days
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetInactiveSessionTtlParams, OkUnion>>}
 */
export type setInactiveSessionTtl = (
  params?: SetInactiveSessionTtlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetInactiveSessionTtlParams, OkUnion>>
