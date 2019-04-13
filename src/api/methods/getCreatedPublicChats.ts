import { ChatsUnion } from '../outputs'

/**
 * Returns a list of public chats created by the user
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type GetCreatedPublicChatsMethod = <ResponseT = ChatsUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
