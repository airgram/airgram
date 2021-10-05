import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface StartGroupCallRecordingParams {
  groupCallId?: number // Group call identifier
  title?: string // Group call recording title; 0-64 characters
  recordVideo?: boolean // Pass true to record a video file instead of an audio file
  usePortraitOrientation?: boolean // Pass true to use portrait orientation for video instead of landscape one
}

/**
 * Starts recording of an active group call. Requires groupCall.can_be_managed group
 * call flag
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {string} [params.title] - Group call recording title; 0-64 characters
 * @param {boolean} [params.recordVideo] - Pass true to record a video file instead
 * of an audio file
 * @param {boolean} [params.usePortraitOrientation] - Pass true to use portrait orientation
 * for video instead of landscape one
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<StartGroupCallRecordingParams, OkUnion>>}
 */
export type startGroupCallRecording = (
  params?: StartGroupCallRecordingParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<StartGroupCallRecordingParams, OkUnion>>
