import { OkUnion } from '../outputs'

/**
 * Adds multiple new members to a chat. Currently this option is only available for
 * supergroups and channels. This option can't be used to join a chat. Members can't
 * be added to a channel if it has more than 200 members. Members will not be added
 * until the chat state has been synchronized with the server
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number[]} [params.userIds] - Identifiers of the users to be added to the
 * chat
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddChatMembersMethod = <ResponseT = OkUnion>(
  params: AddChatMembersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddChatMembersParams {
  /** Chat identifier */
  chatId?: number
  /** Identifiers of the users to be added to the chat */
  userIds?: number[]
}
