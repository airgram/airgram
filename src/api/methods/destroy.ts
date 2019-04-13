import { OkUnion } from '../outputs'

/**
 * Closes the TDLib instance, destroying all local data without a proper logout. The
 * current user session will remain in the list of all active sessions. All local data
 * will be destroyed. After the destruction completes updateAuthorizationState with
 * authorizationStateClosed will be sent
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DestroyMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
