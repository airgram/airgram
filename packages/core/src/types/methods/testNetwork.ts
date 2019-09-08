import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Sends a simple network request to the Telegram servers; for testing only. Can be
 * called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type testNetwork<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>
