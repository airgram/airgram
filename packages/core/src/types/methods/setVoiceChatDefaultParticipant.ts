import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetVoiceChatDefaultParticipantParams {
  chatId?: number // Chat identifier
  defaultParticipantId?: MessageSenderInputUnion // Default group call participant identifier to join the voice chats
}

/**
 * Changes default participant identifier, which can be used to join voice chats in
 * a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {MessageSenderInputUnion} [params.defaultParticipantId] - Default group
 * call participant identifier to join the voice chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetVoiceChatDefaultParticipantParams, OkUnion>>}
 */
export type setVoiceChatDefaultParticipant = (
  params?: SetVoiceChatDefaultParticipantParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetVoiceChatDefaultParticipantParams, OkUnion>>
