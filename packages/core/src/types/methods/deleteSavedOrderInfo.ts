import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Deletes saved order info
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type deleteSavedOrderInfo<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>
