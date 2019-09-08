import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Terminates all other sessions of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type terminateAllOtherSessions<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>
