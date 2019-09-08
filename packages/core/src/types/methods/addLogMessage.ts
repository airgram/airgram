import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AddLogMessageParams {
  verbosityLevel?: number // Minimum verbosity level needed for the message to be logged, 0-1023
  text?: string // Text of a message to log
}

/**
 * Adds a message to TDLib internal log. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 * @param {Object} params
 * @param {number} [params.verbosityLevel] - Minimum verbosity level needed for the
 * message to be logged, 0-1023
 * @param {string} [params.text] - Text of a message to log
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddLogMessageParams, OkUnion>>}
 */
export type addLogMessage<ExtensionT> = (
  params?: AddLogMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddLogMessageParams, OkUnion> & ExtensionT>
