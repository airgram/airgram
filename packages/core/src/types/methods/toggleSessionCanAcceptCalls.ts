import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSessionCanAcceptCallsParams {
  sessionId?: string // Session identifier
  canAcceptCalls?: boolean // True, if incoming calls can be accepted by the session
}

/**
 * Toggles whether a session can accept incoming calls
 * @param {Object} params
 * @param {string} [params.sessionId] - Session identifier
 * @param {boolean} [params.canAcceptCalls] - True, if incoming calls can be accepted
 * by the session
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSessionCanAcceptCallsParams, OkUnion>>}
 */
export type toggleSessionCanAcceptCalls = (
  params?: ToggleSessionCanAcceptCallsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSessionCanAcceptCallsParams, OkUnion>>
