import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TestBytesUnion } from '../outputs'

export interface TestCallBytesParams {
  x?: string // Bytes to return
}

/**
 * Returns the received bytes; for testing only. This is an offline method. Can be called
 * before authorization
 * @param {Object} params
 * @param {string} [params.x] - Bytes to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestCallBytesParams, TestBytesUnion>>}
 */
export type testCallBytes<ExtensionT> = (
  params?: TestCallBytesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestCallBytesParams, TestBytesUnion> & ExtensionT>
