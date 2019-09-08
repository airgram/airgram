import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Closes the TDLib instance. All databases will be flushed to disk and properly closed.
 * After the close completes, updateAuthorizationState with authorizationStateClosed
 * will be sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type close<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>
