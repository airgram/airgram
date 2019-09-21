import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AddChatMembersParams {
  chatId?: number // Chat identifier
  userIds?: number[] // Identifiers of the users to be added to the chat
}

/**
 * Adds multiple new members to a chat. Currently this option is only available for
 * supergroups and channels. This option can't be used to join a chat. Members can't
 * be added to a channel if it has more than 200 members. Members will not be added
 * until the chat state has been synchronized with the server
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number[]} [params.userIds] - Identifiers of the users to be added to the
 * chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddChatMembersParams, OkUnion>>}
 */
export type addChatMembers = (
  params?: AddChatMembersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddChatMembersParams, OkUnion>>
