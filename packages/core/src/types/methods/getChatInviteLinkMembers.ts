import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkMemberInput } from '../inputs'
import { ChatInviteLinkMembersUnion } from '../outputs'

export interface GetChatInviteLinkMembersParams {
  chatId?: number // Chat identifier
  inviteLink?: string // Invite link for which to return chat members
  offsetMember?: ChatInviteLinkMemberInput // A chat member from which to return next chat members; pass null to get results from the beginning
  limit?: number // The maximum number of chat members to return; up to 100
}

/**
 * Returns chat members joined a chat via an invite link. Requires administrator privileges
 * and can_invite_users right in the chat for own links and owner privileges for other
 * links
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.inviteLink] - Invite link for which to return chat members
 * @param {ChatInviteLinkMemberInput} [params.offsetMember] - A chat member from
 * which to return next chat members; pass null to get results from the beginning
 * @param {number} [params.limit] - The maximum number of chat members to return;
 * up to 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatInviteLinkMembersParams, ChatInviteLinkMembersUnion>>}
 */
export type getChatInviteLinkMembers = (
  params?: GetChatInviteLinkMembersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatInviteLinkMembersParams, ChatInviteLinkMembersUnion>>
