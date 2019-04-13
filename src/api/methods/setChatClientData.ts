import { OkUnion } from '../outputs'

/**
 * Changes client data associated with a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.clientData] - New value of client_data
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetChatClientDataMethod = <ResponseT = OkUnion>(
  params: SetChatClientDataParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetChatClientDataParams {
  /** Chat identifier */
  chatId?: number
  /** New value of client_data */
  clientData?: string
}
