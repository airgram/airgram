import { TemporaryPasswordStateUnion } from '../outputs'

/**
 * Returns information about the current temporary password
 * @param {Object} state
 * @returns {TemporaryPasswordStateUnion}
 */
export type GetTemporaryPasswordStateMethod = <ResponseT = TemporaryPasswordStateUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
