import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'



/**
 * Returns a list of basic group and supergroup chats, which can be used as a discussion
 * group for a channel. Basic group chats need to be first upgraded to supergroups before
 * they can be set as a discussion group
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, ChatsUnion>>}
 */
export type getSuitableDiscussionChats = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ChatsUnion>>
