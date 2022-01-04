import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatMemberStatusInputUnion, MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatMemberStatusParams {
  chatId?: number // Chat identifier
  memberId?: MessageSenderInputUnion // Member identifier. Chats can be only banned and unbanned in supergroups and channels
  status?: ChatMemberStatusInputUnion // The new status of the member in the chat
}

/**
 * Changes the status of a chat member, needs appropriate privileges. This function
 * is currently not suitable for transferring chat ownership; use transferChatOwnership
 * instead. Use addChatMember or banChatMember if some additional parameters needs to
 * be passed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {MessageSenderInputUnion} [params.memberId] - Member identifier. Chats
 * can be only banned and unbanned in supergroups and channels
 * @param {ChatMemberStatusInputUnion} [params.status] - The new status of the member
 * in the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatMemberStatusParams, OkUnion>>}
 */
export type setChatMemberStatus = (
  params?: SetChatMemberStatusParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatMemberStatusParams, OkUnion>>
