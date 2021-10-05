import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AddLogMessageParams {
  verbosityLevel?: number // The minimum verbosity level needed for the message to be logged; 0-1023
  text?: string // Text of a message to log
}

/**
 * Adds a message to TDLib internal log. Can be called synchronously
 * @param {Object} params
 * @param {number} [params.verbosityLevel] - The minimum verbosity level needed for
 * the message to be logged; 0-1023
 * @param {string} [params.text] - Text of a message to log
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddLogMessageParams, OkUnion>>}
 */
export type addLogMessage = (
  params?: AddLogMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddLogMessageParams, OkUnion>>

export type addLogMessageSync = (params?: AddLogMessageParams) => OkUnion
