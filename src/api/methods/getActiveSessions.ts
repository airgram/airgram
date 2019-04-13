import { SessionsUnion } from '../outputs'

/**
 * Returns all active sessions of the current user
 * @param {Object} state
 * @returns {SessionsUnion}
 */
export type GetActiveSessionsMethod = <ResponseT = SessionsUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
