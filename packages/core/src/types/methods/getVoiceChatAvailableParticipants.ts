import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSendersUnion } from '../outputs'

export interface GetVoiceChatAvailableParticipantsParams {
  chatId?: number // Chat identifier
}

/**
 * Returns list of participant identifiers, which can be used to join voice chats in
 * a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetVoiceChatAvailableParticipantsParams, MessageSendersUnion>>}
 */
export type getVoiceChatAvailableParticipants = (
  params?: GetVoiceChatAvailableParticipantsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetVoiceChatAvailableParticipantsParams, MessageSendersUnion>>
