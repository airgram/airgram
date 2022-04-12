import { ApiRequestOptions, ApiResponse } from '../airgram'
import { RtmpUrlUnion } from '../outputs'

export interface ReplaceVideoChatRtmpUrlParams {
  chatId?: number // Chat identifier
}

/**
 * Replaces the current RTMP URL for streaming to the chat; requires creator privileges
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReplaceVideoChatRtmpUrlParams, RtmpUrlUnion>>}
 */
export type replaceVideoChatRtmpUrl = (
  params?: ReplaceVideoChatRtmpUrlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReplaceVideoChatRtmpUrlParams, RtmpUrlUnion>>
