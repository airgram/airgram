import { OkUnion } from '../outputs'

/**
 * Closes the TDLib instance. All databases will be flushed to disk and properly closed.
 * After the close completes, updateAuthorizationState with authorizationStateClosed
 * will be sent
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CloseMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
