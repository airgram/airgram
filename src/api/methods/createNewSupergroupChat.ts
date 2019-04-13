import { ChatUnion } from '../outputs'

/**
 * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate.
 * Returns the newly created chat
 * @param {Object} params
 * @param {string} [params.title] - Title of the new chat; 1-255 characters
 * @param {boolean} [params.isChannel] - True, if a channel chat should be created
 * @param {string} [params.description] - Chat description; 0-255 characters
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type CreateNewSupergroupChatMethod = <ResponseT = ChatUnion>(
  params: CreateNewSupergroupChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateNewSupergroupChatParams {
  /** Title of the new chat; 1-255 characters */
  title?: string
  /** True, if a channel chat should be created */
  isChannel?: boolean
  /** Chat description; 0-255 characters */
  description?: string
}
