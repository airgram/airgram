import { SupergroupMembersFilterInputUnion } from '../inputs'
import { ChatMembersUnion } from '../outputs'

/**
 * Returns information about members or banned users in a supergroup or channel. Can
 * be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator
 * privileges may be required for some filters
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {SupergroupMembersFilterInputUnion} [params.filter] - The type of users
 * to return. By default, supergroupMembersRecent
 * @param {number} [params.offset] - Number of users to skip
 * @param {number} [params.limit] - The maximum number of users be returned; up to
 * 200
 * @param {Object} state
 * @returns {ChatMembersUnion}
 */
export type GetSupergroupMembersMethod = <ResponseT = ChatMembersUnion>(
  params: GetSupergroupMembersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetSupergroupMembersParams {
  /** Identifier of the supergroup or channel */
  supergroupId?: number
  /** The type of users to return. By default, supergroupMembersRecent */
  filter?: SupergroupMembersFilterInputUnion
  /** Number of users to skip */
  offset?: number
  /** The maximum number of users be returned; up to 200 */
  limit?: number
}
