import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Clears the list of recently found chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type clearRecentlyFoundChats<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>
