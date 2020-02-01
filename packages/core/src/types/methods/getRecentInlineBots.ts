import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UsersUnion } from '../outputs'



/**
 * Returns up to 20 recently used inline bots in the order of their last usage
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, UsersUnion>>}
 */
export type getRecentInlineBots = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, UsersUnion>>
