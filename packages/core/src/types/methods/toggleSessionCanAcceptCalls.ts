import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSessionCanAcceptCallsParams {
  sessionId?: string // Session identifier
  canAcceptCalls?: boolean // Pass true to allow accepting incoming calls by the session; pass false otherwise
}

/**
 * Toggles whether a session can accept incoming calls
 * @param {Object} params
 * @param {string} [params.sessionId] - Session identifier
 * @param {boolean} [params.canAcceptCalls] - Pass true to allow accepting incoming
 * calls by the session; pass false otherwise
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSessionCanAcceptCallsParams, OkUnion>>}
 */
export type toggleSessionCanAcceptCalls = (
  params?: ToggleSessionCanAcceptCallsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSessionCanAcceptCallsParams, OkUnion>>
