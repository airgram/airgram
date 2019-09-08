import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TestIntUnion } from '../outputs'

export interface TestSquareIntParams {
  x?: number // Number to square
}

/**
 * Returns the squared received number; for testing only. This is an offline method.
 * Can be called before authorization
 * @param {Object} params
 * @param {number} [params.x] - Number to square
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestSquareIntParams, TestIntUnion>>}
 */
export type testSquareInt<ExtensionT> = (
  params?: TestSquareIntParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestSquareIntParams, TestIntUnion> & ExtensionT>
