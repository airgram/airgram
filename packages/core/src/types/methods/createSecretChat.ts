import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface CreateSecretChatParams {
  secretChatId?: number // Secret chat identifier
}

/**
 * Returns an existing chat corresponding to a known secret chat
 * @param {Object} params
 * @param {number} [params.secretChatId] - Secret chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateSecretChatParams, ChatUnion>>}
 */
export type createSecretChat<ExtensionT> = (
  params?: CreateSecretChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateSecretChatParams, ChatUnion> & ExtensionT>
