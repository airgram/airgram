import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SupergroupMembersFilterInputUnion } from '../inputs'
import { ChatMembersUnion } from '../outputs'

export interface GetSupergroupMembersParams {
  supergroupId?: number // Identifier of the supergroup or channel
  filter?: SupergroupMembersFilterInputUnion // The type of users to return. By default, supergroupMembersFilterRecent
  offset?: number // Number of users to skip
  limit?: number // The maximum number of users be returned; up to 200
}

/**
 * Returns information about members or banned users in a supergroup or channel. Can
 * be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator
 * privileges may be required for some filters
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {SupergroupMembersFilterInputUnion} [params.filter] - The type of users
 * to return. By default, supergroupMembersFilterRecent
 * @param {number} [params.offset] - Number of users to skip
 * @param {number} [params.limit] - The maximum number of users be returned; up to
 * 200
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetSupergroupMembersParams, ChatMembersUnion>>}
 */
export type getSupergroupMembers = (
  params?: GetSupergroupMembersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetSupergroupMembersParams, ChatMembersUnion>>
