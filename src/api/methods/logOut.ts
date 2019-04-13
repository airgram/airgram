import { OkUnion } from '../outputs'

/**
 * Closes the TDLib instance after a proper logout. Requires an available network connection.
 * All local data will be destroyed. After the logout completes, updateAuthorizationState
 * with authorizationStateClosed will be sent
 * @param {Object} state
 * @returns {OkUnion}
 */
export type LogOutMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
