import { OkUnion } from '../outputs'

/**
 * Clears the list of recently found chats
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ClearRecentlyFoundChatsMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
