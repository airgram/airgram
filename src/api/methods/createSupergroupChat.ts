import { ChatUnion } from '../outputs'

/**
 * Returns an existing chat corresponding to a known supergroup or channel
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup or channel identifier
 * @param {boolean} [params.force] - If true, the chat will be created without network
 * request. In this case all information about the chat except its type, title and photo
 * can be incorrect
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type CreateSupergroupChatMethod = <ResponseT = ChatUnion>(
  params: CreateSupergroupChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateSupergroupChatParams {
  /** Supergroup or channel identifier */
  supergroupId?: number
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  force?: boolean
}
