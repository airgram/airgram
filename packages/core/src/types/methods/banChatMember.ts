import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface BanChatMemberParams {
  chatId?: number // Chat identifier
  memberId?: MessageSenderInputUnion // Member identifier
  bannedUntilDate?: number // Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days or for less than 30 seconds from the current time, the user is considered to be banned forever. Ignored in basic groups
  revokeMessages?: boolean // Pass true to delete all messages in the chat for the user that is being removed. Always true for supergroups and channels
}

/**
 * Bans a member in a chat. Members can't be banned in private or secret chats. In supergroups
 * and channels, the user will not be able to return to the group on their own using
 * invite links, etc., unless unbanned first
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {MessageSenderInputUnion} [params.memberId] - Member identifier
 * @param {number} [params.bannedUntilDate] - Point in time (Unix timestamp) when
 * the user will be unbanned; 0 if never. If the user is banned for more than 366 days
 * or for less than 30 seconds from the current time, the user is considered to be banned
 * forever. Ignored in basic groups
 * @param {boolean} [params.revokeMessages] - Pass true to delete all messages in
 * the chat for the user that is being removed. Always true for supergroups and channels
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<BanChatMemberParams, OkUnion>>}
 */
export type banChatMember = (
  params?: BanChatMemberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<BanChatMemberParams, OkUnion>>
