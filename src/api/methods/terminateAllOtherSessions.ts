import { OkUnion } from '../outputs'

/**
 * Terminates all other sessions of the current user
 * @param {Object} state
 * @returns {OkUnion}
 */
export type TerminateAllOtherSessionsMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
