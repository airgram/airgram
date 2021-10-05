import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface StartGroupCallScreenSharingParams {
  groupCallId?: number // Group call identifier
  audioSourceId?: number // Screen sharing audio channel synchronization source identifier; received from tgcalls
  payload?: string // Group call join payload; received from tgcalls
}

/**
 * Starts screen sharing in a joined group call. Returns join response payload for tgcalls
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {number} [params.audioSourceId] - Screen sharing audio channel synchronization
 * source identifier; received from tgcalls
 * @param {string} [params.payload] - Group call join payload; received from tgcalls
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<StartGroupCallScreenSharingParams, TextUnion>>}
 */
export type startGroupCallScreenSharing = (
  params?: StartGroupCallScreenSharingParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<StartGroupCallScreenSharingParams, TextUnion>>
