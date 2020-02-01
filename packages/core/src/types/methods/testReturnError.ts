import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ErrorInput } from '../inputs'
import { ErrorUnion } from '../outputs'

export interface TestReturnErrorParams {
  error?: ErrorInput // The error to be returned
}

/**
 * Returns the specified error and ensures that the Error object is used; for testing
 * only. This is an offline method. Can be called before authorization. Can be called
 * synchronously
 * @param {Object} params
 * @param {ErrorInput} [params.error] - The error to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestReturnErrorParams, ErrorUnion>>}
 */
export type testReturnError = (
  params?: TestReturnErrorParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestReturnErrorParams, ErrorUnion>>

export type testReturnErrorSync = (params?: TestReturnErrorParams) => ErrorUnion
