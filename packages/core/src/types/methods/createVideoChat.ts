import { ApiRequestOptions, ApiResponse } from '../airgram'
import { GroupCallIdUnion } from '../outputs'

export interface CreateVideoChatParams {
  chatId?: number // Chat identifier, in which the video chat will be created
  title?: string // Group call title; if empty, chat title will be used
  startDate?: number // Point in time (Unix timestamp) when the group call is supposed to be started by an administrator; 0 to start the video chat immediately. The date must be at least 10 seconds and at most 8 days in the future
  isRtmpStream?: boolean // Pass true to create an RTMP stream instead of an ordinary video chat; requires creator privileges
}

/**
 * Creates a video chat (a group call bound to a chat). Available only for basic groups,
 * supergroups and channels; requires can_manage_video_chats rights
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier, in which the video chat will
 * be created
 * @param {string} [params.title] - Group call title; if empty, chat title will be
 * used
 * @param {number} [params.startDate] - Point in time (Unix timestamp) when the group
 * call is supposed to be started by an administrator; 0 to start the video chat immediately.
 * The date must be at least 10 seconds and at most 8 days in the future
 * @param {boolean} [params.isRtmpStream] - Pass true to create an RTMP stream instead
 * of an ordinary video chat; requires creator privileges
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateVideoChatParams, GroupCallIdUnion>>}
 */
export type createVideoChat = (
  params?: CreateVideoChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateVideoChatParams, GroupCallIdUnion>>
