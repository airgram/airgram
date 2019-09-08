import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ProxiesUnion } from '../outputs'

/**
 * Returns list of proxies that are currently set up. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, ProxiesUnion>>}
 */
export type getProxies<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ProxiesUnion> & ExtensionT>
