import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { ChatMemberUnion } from '../outputs'

export interface GetChatMemberParams {
  chatId?: number // Chat identifier
  memberId?: MessageSenderInputUnion // Member identifier
}

/**
 * Returns information about a single member of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {MessageSenderInputUnion} [params.memberId] - Member identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatMemberParams, ChatMemberUnion>>}
 */
export type getChatMember = (
  params?: GetChatMemberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatMemberParams, ChatMemberUnion>>
