import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SecretChatUnion } from '../outputs'

export interface GetSecretChatParams {
  secretChatId?: number // Secret chat identifier
}

/**
 * Returns information about a secret chat by its identifier. This is an offline request
 * @param {Object} params
 * @param {number} [params.secretChatId] - Secret chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetSecretChatParams, SecretChatUnion>>}
 */
export type getSecretChat = (
  params?: GetSecretChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetSecretChatParams, SecretChatUnion>>
