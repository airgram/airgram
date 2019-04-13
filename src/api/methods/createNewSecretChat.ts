import { ChatUnion } from '../outputs'

/**
 * Creates a new secret chat. Returns the newly created chat
 * @param {Object} params
 * @param {number} [params.userId] - Identifier of the target user
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type CreateNewSecretChatMethod = <ResponseT = ChatUnion>(
  params: CreateNewSecretChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateNewSecretChatParams {
  /** Identifier of the target user */
  userId?: number
}
