import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SessionsUnion } from '../outputs'



/**
 * Returns all active sessions of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, SessionsUnion>>}
 */
export type getActiveSessions = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, SessionsUnion>>
