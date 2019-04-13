import { MessagesUnion } from '../outputs'

/**
 * Returns all active live locations that should be updated by the client. The list
 * is persistent across application restarts only if the message database is used
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type GetActiveLiveLocationMessagesMethod = <ResponseT = MessagesUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
