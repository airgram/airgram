import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'



/**
 * Returns a list of basic group and supergroup chats, which can be used as a discussion
 * group for a channel. Returned basic group chats must be first upgraded to supergroups
 * before they can be set as a discussion group. To set a returned supergroup as a discussion
 * group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable
 * first
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, ChatsUnion>>}
 */
export type getSuitableDiscussionChats = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ChatsUnion>>
