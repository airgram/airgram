import { ApiRequestOptions, ApiResponse } from '../airgram'
import { JsonValueUnion } from '../outputs'

/**
 * Returns application config, provided by the server. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, JsonValueUnion>>}
 */
export type getApplicationConfig<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, JsonValueUnion> & ExtensionT>
