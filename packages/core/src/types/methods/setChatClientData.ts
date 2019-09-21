import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetChatClientDataParams {
  chatId?: number // Chat identifier
  clientData?: string // New value of client_data
}

/**
 * Changes client data associated with a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.clientData] - New value of client_data
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatClientDataParams, OkUnion>>}
 */
export type setChatClientData = (
  params?: SetChatClientDataParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatClientDataParams, OkUnion>>
