import { UsersUnion } from '../outputs'

/**
 * Returns all user contacts
 * @param {Object} state
 * @returns {UsersUnion}
 */
export type GetContactsMethod = <ResponseT = UsersUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
