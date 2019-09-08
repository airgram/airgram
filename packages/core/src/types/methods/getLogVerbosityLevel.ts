import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LogVerbosityLevelUnion } from '../outputs'

/**
 * Returns current verbosity level of the internal logging of TDLib. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, LogVerbosityLevelUnion>>}
 */
export type getLogVerbosityLevel<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, LogVerbosityLevelUnion> & ExtensionT>
