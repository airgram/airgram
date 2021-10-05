import { ApiRequestOptions, ApiResponse } from '../airgram'
import { GroupCallIdUnion } from '../outputs'

export interface CreateVoiceChatParams {
  chatId?: number // Chat identifier, in which the voice chat will be created
  title?: string // Group call title; if empty, chat title will be used
  startDate?: number // Point in time (Unix timestamp) when the group call is supposed to be started by an administrator; 0 to start the voice chat immediately. The date must be at least 10 seconds and at most 8 days in the future
}

/**
 * Creates a voice chat (a group call bound to a chat). Available only for basic groups,
 * supergroups and channels; requires can_manage_voice_chats rights
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier, in which the voice chat will
 * be created
 * @param {string} [params.title] - Group call title; if empty, chat title will be
 * used
 * @param {number} [params.startDate] - Point in time (Unix timestamp) when the group
 * call is supposed to be started by an administrator; 0 to start the voice chat immediately.
 * The date must be at least 10 seconds and at most 8 days in the future
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateVoiceChatParams, GroupCallIdUnion>>}
 */
export type createVoiceChat = (
  params?: CreateVoiceChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateVoiceChatParams, GroupCallIdUnion>>
