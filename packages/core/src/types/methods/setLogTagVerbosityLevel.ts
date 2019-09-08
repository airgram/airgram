import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetLogTagVerbosityLevelParams {
  tag?: string // Logging tag to change verbosity level
  newVerbosityLevel?: number // New verbosity level; 1-1024
}

/**
 * Sets the verbosity level for a specified TDLib internal log tag. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.tag] - Logging tag to change verbosity level
 * @param {number} [params.newVerbosityLevel] - New verbosity level; 1-1024
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetLogTagVerbosityLevelParams, OkUnion>>}
 */
export type setLogTagVerbosityLevel<ExtensionT> = (
  params?: SetLogTagVerbosityLevelParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetLogTagVerbosityLevelParams, OkUnion> & ExtensionT>
