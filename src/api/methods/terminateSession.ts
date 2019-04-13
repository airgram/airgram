import { OkUnion } from '../outputs'

/**
 * Terminates a session of the current user
 * @param {Object} params
 * @param {number | string} [params.sessionId] - Session identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type TerminateSessionMethod = <ResponseT = OkUnion>(
  params: TerminateSessionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TerminateSessionParams {
  /** Session identifier */
  sessionId?: number | string
}
