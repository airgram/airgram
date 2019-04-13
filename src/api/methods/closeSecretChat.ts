import { OkUnion } from '../outputs'

/**
 * Closes a secret chat, effectively transfering its state to secretChatStateClosed
 * @param {Object} params
 * @param {number} [params.secretChatId] - Secret chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CloseSecretChatMethod = <ResponseT = OkUnion>(
  params: CloseSecretChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CloseSecretChatParams {
  /** Secret chat identifier */
  secretChatId?: number
}
