import { ChatUnion } from '../outputs'

/**
 * Returns an existing chat corresponding to a known secret chat
 * @param {Object} params
 * @param {number} [params.secretChatId] - Secret chat identifier
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type CreateSecretChatMethod = <ResponseT = ChatUnion>(
  params: CreateSecretChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateSecretChatParams {
  /** Secret chat identifier */
  secretChatId?: number
}
