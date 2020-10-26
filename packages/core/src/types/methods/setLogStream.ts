import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LogStreamInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetLogStreamParams {
  logStream?: LogStreamInputUnion // New log stream
}

/**
 * Sets new log stream for internal logging of TDLib. Can be called synchronously
 * @param {Object} params
 * @param {LogStreamInputUnion} [params.logStream] - New log stream
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetLogStreamParams, OkUnion>>}
 */
export type setLogStream = (
  params?: SetLogStreamParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetLogStreamParams, OkUnion>>

export type setLogStreamSync = (params?: SetLogStreamParams) => OkUnion
