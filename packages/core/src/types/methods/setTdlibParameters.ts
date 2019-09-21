import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TdlibParametersInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetTdlibParametersParams {
  parameters?: TdlibParametersInput // Parameters
}

/**
 * Sets the parameters for TDLib initialization. Works only when the current authorization
 * state is authorizationStateWaitTdlibParameters
 * @param {Object} params
 * @param {TdlibParametersInput} [params.parameters] - Parameters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetTdlibParametersParams, OkUnion>>}
 */
export type setTdlibParameters = (
  params?: SetTdlibParametersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetTdlibParametersParams, OkUnion>>
