import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TestStringInput } from '../inputs'
import { TestVectorStringObjectUnion } from '../outputs'

export interface TestCallVectorStringObjectParams {
  x?: TestStringInput[] // Vector of objects to return
}

/**
 * Returns the received vector of objects containing a string; for testing only. This
 * is an offline method. Can be called before authorization
 * @param {Object} params
 * @param {TestStringInput[]} [params.x] - Vector of objects to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestCallVectorStringObjectParams, TestVectorStringObjectUnion>>}
 */
export type testCallVectorStringObject<ExtensionT> = (
  params?: TestCallVectorStringObjectParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestCallVectorStringObjectParams, TestVectorStringObjectUnion> & ExtensionT>
