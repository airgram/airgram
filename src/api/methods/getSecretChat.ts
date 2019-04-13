import { SecretChatUnion } from '../outputs'

/**
 * Returns information about a secret chat by its identifier. This is an offline request
 * @param {Object} params
 * @param {number} [params.secretChatId] - Secret chat identifier
 * @param {Object} state
 * @returns {SecretChatUnion}
 */
export type GetSecretChatMethod = <ResponseT = SecretChatUnion>(
  params: GetSecretChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetSecretChatParams {
  /** Secret chat identifier */
  secretChatId?: number
}
