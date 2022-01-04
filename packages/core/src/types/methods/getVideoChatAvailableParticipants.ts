import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSendersUnion } from '../outputs'

export interface GetVideoChatAvailableParticipantsParams {
  chatId?: number // Chat identifier
}

/**
 * Returns list of participant identifiers, on whose behalf a video chat in the chat
 * can be joined
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetVideoChatAvailableParticipantsParams, MessageSendersUnion>>}
 */
export type getVideoChatAvailableParticipants = (
  params?: GetVideoChatAvailableParticipantsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetVideoChatAvailableParticipantsParams, MessageSendersUnion>>
