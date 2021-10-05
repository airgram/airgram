import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetGroupCallTitleParams {
  groupCallId?: number // Group call identifier
  title?: string // New group call title; 1-64 characters
}

/**
 * Sets group call title. Requires groupCall.can_be_managed group call flag
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {string} [params.title] - New group call title; 1-64 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetGroupCallTitleParams, OkUnion>>}
 */
export type setGroupCallTitle = (
  params?: SetGroupCallTitleParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetGroupCallTitleParams, OkUnion>>
