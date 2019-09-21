import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CloseSecretChatParams {
  secretChatId?: number // Secret chat identifier
}

/**
 * Closes a secret chat, effectively transfering its state to secretChatStateClosed
 * @param {Object} params
 * @param {number} [params.secretChatId] - Secret chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CloseSecretChatParams, OkUnion>>}
 */
export type closeSecretChat = (
  params?: CloseSecretChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CloseSecretChatParams, OkUnion>>
