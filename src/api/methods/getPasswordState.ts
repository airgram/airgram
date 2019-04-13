import { PasswordStateUnion } from '../outputs'

/**
 * Returns the current state of 2-step verification
 * @param {Object} state
 * @returns {PasswordStateUnion}
 */
export type GetPasswordStateMethod = <ResponseT = PasswordStateUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
