import { ApiRequestOptions, ApiResponse } from '../airgram'
import { RtmpUrlUnion } from '../outputs'

export interface GetVideoChatRtmpUrlParams {
  chatId?: number // Chat identifier
}

/**
 * Returns RTMP URL for streaming to the chat; requires creator privileges
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetVideoChatRtmpUrlParams, RtmpUrlUnion>>}
 */
export type getVideoChatRtmpUrl = (
  params?: GetVideoChatRtmpUrlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetVideoChatRtmpUrlParams, RtmpUrlUnion>>
