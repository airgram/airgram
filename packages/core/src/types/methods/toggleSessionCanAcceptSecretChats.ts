import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSessionCanAcceptSecretChatsParams {
  sessionId?: string // Session identifier
  canAcceptSecretChats?: boolean // Pass true to allow accepring secret chats by the session; pass false otherwise
}

/**
 * Toggles whether a session can accept incoming secret chats
 * @param {Object} params
 * @param {string} [params.sessionId] - Session identifier
 * @param {boolean} [params.canAcceptSecretChats] - Pass true to allow accepring
 * secret chats by the session; pass false otherwise
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSessionCanAcceptSecretChatsParams, OkUnion>>}
 */
export type toggleSessionCanAcceptSecretChats = (
  params?: ToggleSessionCanAcceptSecretChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSessionCanAcceptSecretChatsParams, OkUnion>>
