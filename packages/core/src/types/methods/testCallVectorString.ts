import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TestVectorStringUnion } from '../outputs'

export interface TestCallVectorStringParams {
  x?: string[] // Vector of strings to return
}

/**
 * Returns the received vector of strings; for testing only. This is an offline method.
 * Can be called before authorization
 * @param {Object} params
 * @param {string[]} [params.x] - Vector of strings to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestCallVectorStringParams, TestVectorStringUnion>>}
 */
export type testCallVectorString = (
  params?: TestCallVectorStringParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestCallVectorStringParams, TestVectorStringUnion>>
