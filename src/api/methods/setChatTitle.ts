import { OkUnion } from '../outputs'

/**
 * Changes the chat title. Supported only for basic groups, supergroups and channels.
 * Requires administrator rights in basic groups and the appropriate administrator rights
 * in supergroups and channels. The title will not be changed until the request to the
 * server has been completed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.title] - New title of the chat; 1-255 characters
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetChatTitleMethod = <ResponseT = OkUnion>(
  params: SetChatTitleParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetChatTitleParams {
  /** Chat identifier */
  chatId?: number
  /** New title of the chat; 1-255 characters */
  title?: string
}
