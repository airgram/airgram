import { ChatUnion } from '../outputs'

/**
 * Creates a new basic group and sends a corresponding messageBasicGroupChatCreate.
 * Returns the newly created chat
 * @param {Object} params
 * @param {number[]} [params.userIds] - Identifiers of users to be added to the basic
 * group
 * @param {string} [params.title] - Title of the new basic group; 1-255 characters
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type CreateNewBasicGroupChatMethod = <ResponseT = ChatUnion>(
  params: CreateNewBasicGroupChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateNewBasicGroupChatParams {
  /** Identifiers of users to be added to the basic group */
  userIds?: number[]
  /** Title of the new basic group; 1-255 characters */
  title?: string
}
