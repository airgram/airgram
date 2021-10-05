import { ApiRequestOptions, ApiResponse } from '../airgram'
import { GroupCallVideoQualityInputUnion } from '../inputs'
import { FilePartUnion } from '../outputs'

export interface GetGroupCallStreamSegmentParams {
  groupCallId?: number // Group call identifier
  timeOffset?: number // Point in time when the stream segment begins; Unix timestamp in milliseconds
  scale?: number // Segment duration scale; 0-1. Segment's duration is 1000/(2**scale) milliseconds
  channelId?: number // Identifier of an audio/video channel to get as received from tgcalls
  videoQuality?: GroupCallVideoQualityInputUnion // Video quality as received from tgcalls; pass null to get the worst available quality
}

/**
 * Returns a file with a segment of a group call stream in a modified OGG format for
 * audio or MPEG-4 format for video
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {number} [params.timeOffset] - Point in time when the stream segment begins;
 * Unix timestamp in milliseconds
 * @param {number} [params.scale] - Segment duration scale; 0-1. Segment's duration
 * is 1000/(2**scale) milliseconds
 * @param {number} [params.channelId] - Identifier of an audio/video channel to get
 * as received from tgcalls
 * @param {GroupCallVideoQualityInputUnion} [params.videoQuality] - Video quality
 * as received from tgcalls; pass null to get the worst available quality
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetGroupCallStreamSegmentParams, FilePartUnion>>}
 */
export type getGroupCallStreamSegment = (
  params?: GetGroupCallStreamSegmentParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetGroupCallStreamSegmentParams, FilePartUnion>>
