import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetChatDiscussionGroupParams {
  chatId?: number // Identifier of the channel chat. Pass 0 to remove a link from the supergroup passed in the second argument to a linked channel chat (requires can_pin_messages rights in the supergroup)
  discussionChatId?: number // Identifier of a new channel's discussion group. Use 0 to remove the discussion group. Use the method getSuitableDiscussionChats to find all suitable groups. Basic group chats must be first upgraded to supergroup chats. If new chat members don't have access to old messages in the supergroup, then toggleSupergroupIsAllHistoryAvailable must be used first to change that
}

/**
 * Changes the discussion group of a channel chat; requires can_change_info administrator
 * right in the channel if it is specified
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the channel chat. Pass 0 to remove
 * a link from the supergroup passed in the second argument to a linked channel chat
 * (requires can_pin_messages rights in the supergroup)
 * @param {number} [params.discussionChatId] - Identifier of a new channel's discussion
 * group. Use 0 to remove the discussion group. Use the method getSuitableDiscussionChats
 * to find all suitable groups. Basic group chats must be first upgraded to supergroup
 * chats. If new chat members don't have access to old messages in the supergroup, then
 * toggleSupergroupIsAllHistoryAvailable must be used first to change that
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatDiscussionGroupParams, OkUnion>>}
 */
export type setChatDiscussionGroup = (
  params?: SetChatDiscussionGroupParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatDiscussionGroupParams, OkUnion>>
