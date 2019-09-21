import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TestStringUnion } from '../outputs'

export interface TestCallStringParams {
  x?: string // String to return
}

/**
 * Returns the received string; for testing only. This is an offline method. Can be
 * called before authorization
 * @param {Object} params
 * @param {string} [params.x] - String to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestCallStringParams, TestStringUnion>>}
 */
export type testCallString = (
  params?: TestCallStringParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestCallStringParams, TestStringUnion>>
