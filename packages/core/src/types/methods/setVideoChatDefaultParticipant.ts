import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetVideoChatDefaultParticipantParams {
  chatId?: number // Chat identifier
  defaultParticipantId?: MessageSenderInputUnion // Default group call participant identifier to join the video chats
}

/**
 * Changes default participant identifier, on whose behalf a video chat in the chat
 * will be joined
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {MessageSenderInputUnion} [params.defaultParticipantId] - Default group
 * call participant identifier to join the video chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetVideoChatDefaultParticipantParams, OkUnion>>}
 */
export type setVideoChatDefaultParticipant = (
  params?: SetVideoChatDefaultParticipantParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetVideoChatDefaultParticipantParams, OkUnion>>
