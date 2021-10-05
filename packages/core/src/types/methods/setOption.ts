import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OptionValueInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetOptionParams {
  name?: string // The name of the option
  value?: OptionValueInputUnion // The new value of the option; pass null to reset option value to a default value
}

/**
 * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.)
 * Only writable options can be set. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.name] - The name of the option
 * @param {OptionValueInputUnion} [params.value] - The new value of the option; pass
 * null to reset option value to a default value
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetOptionParams, OkUnion>>}
 */
export type setOption = (
  params?: SetOptionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetOptionParams, OkUnion>>
