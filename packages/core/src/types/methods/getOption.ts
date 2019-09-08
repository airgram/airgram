import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OptionValueUnion } from '../outputs'

export interface GetOptionParams {
  name?: string // The name of the option
}

/**
 * Returns the value of an option by its name. (Check the list of available options
 * on https://core.telegram.org/tdlib/options.) Can be called before authorization
 * @param {Object} params
 * @param {string} [params.name] - The name of the option
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetOptionParams, OptionValueUnion>>}
 */
export type getOption<ExtensionT> = (
  params?: GetOptionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetOptionParams, OptionValueUnion> & ExtensionT>
