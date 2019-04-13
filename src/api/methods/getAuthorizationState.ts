import { AuthorizationStateUnion } from '../outputs'

/**
 * Returns the current authorization state; this is an offline request. For informational
 * purposes only. Use updateAuthorizationState instead to maintain the current authorization
 * state
 * @param {Object} state
 * @returns {AuthorizationStateUnion}
 */
export type GetAuthorizationStateMethod = <ResponseT = AuthorizationStateUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
