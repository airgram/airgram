import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TestVectorIntUnion } from '../outputs'

export interface TestCallVectorIntParams {
  x?: number[] // Vector of numbers to return
}

/**
 * Returns the received vector of numbers; for testing only. This is an offline method.
 * Can be called before authorization
 * @param {Object} params
 * @param {number[]} [params.x] - Vector of numbers to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestCallVectorIntParams, TestVectorIntUnion>>}
 */
export type testCallVectorInt<ExtensionT> = (
  params?: TestCallVectorIntParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestCallVectorIntParams, TestVectorIntUnion> & ExtensionT>
