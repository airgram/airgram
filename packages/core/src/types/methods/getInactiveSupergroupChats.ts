import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'



/**
 * Returns a list of recently inactive supergroups and channels. Can be used when user
 * reaches limit on the number of joined supergroups and channels and receives CHANNELS_TOO_MUCH
 * error
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, ChatsUnion>>}
 */
export type getInactiveSupergroupChats = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ChatsUnion>>
