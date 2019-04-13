import { ChatUnion } from '../outputs'

/**
 * Returns an existing chat corresponding to a given user
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {boolean} [params.force] - If true, the chat will be created without network
 * request. In this case all information about the chat except its type, title and photo
 * can be incorrect
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type CreatePrivateChatMethod = <ResponseT = ChatUnion>(
  params: CreatePrivateChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreatePrivateChatParams {
  /** User identifier */
  userId?: number
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  force?: boolean
}
