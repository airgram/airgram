import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSessionCanAcceptSecretChatsParams {
  sessionId?: string // Session identifier
  canAcceptSecretChats?: boolean // True, if incoming secret chats can be accepted by the session
}

/**
 * Toggles whether a session can accept incoming secret chats
 * @param {Object} params
 * @param {string} [params.sessionId] - Session identifier
 * @param {boolean} [params.canAcceptSecretChats] - True, if incoming secret chats
 * can be accepted by the session
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSessionCanAcceptSecretChatsParams, OkUnion>>}
 */
export type toggleSessionCanAcceptSecretChats = (
  params?: ToggleSessionCanAcceptSecretChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSessionCanAcceptSecretChatsParams, OkUnion>>
