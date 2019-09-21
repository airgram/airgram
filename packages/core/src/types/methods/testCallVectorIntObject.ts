import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TestIntInput } from '../inputs'
import { TestVectorIntObjectUnion } from '../outputs'

export interface TestCallVectorIntObjectParams {
  x?: TestIntInput[] // Vector of objects to return
}

/**
 * Returns the received vector of objects containing a number; for testing only. This
 * is an offline method. Can be called before authorization
 * @param {Object} params
 * @param {TestIntInput[]} [params.x] - Vector of objects to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestCallVectorIntObjectParams, TestVectorIntObjectUnion>>}
 */
export type testCallVectorIntObject = (
  params?: TestCallVectorIntObjectParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestCallVectorIntObjectParams, TestVectorIntObjectUnion>>
