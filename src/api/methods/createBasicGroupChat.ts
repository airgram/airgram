import { ChatUnion } from '../outputs'

/**
 * Returns an existing chat corresponding to a known basic group
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Basic group identifier
 * @param {boolean} [params.force] - If true, the chat will be created without network
 * request. In this case all information about the chat except its type, title and photo
 * can be incorrect
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type CreateBasicGroupChatMethod = <ResponseT = ChatUnion>(
  params: CreateBasicGroupChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateBasicGroupChatParams {
  /** Basic group identifier */
  basicGroupId?: number
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  force?: boolean
}
