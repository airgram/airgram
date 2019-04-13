import { UsersUnion } from '../outputs'

/**
 * Returns up to 20 recently used inline bots in the order of their last usage
 * @param {Object} state
 * @returns {UsersUnion}
 */
export type GetRecentInlineBotsMethod = <ResponseT = UsersUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
