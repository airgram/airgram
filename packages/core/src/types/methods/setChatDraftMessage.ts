import { ApiRequestOptions, ApiResponse } from '../airgram'
import { DraftMessageInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatDraftMessageParams {
  chatId?: number // Chat identifier
  messageThreadId?: number // If not 0, a message thread identifier in which the draft was changed
  draftMessage?: DraftMessageInput // New draft message; pass null to remove the draft
}

/**
 * Changes the draft message in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the draft was changed
 * @param {DraftMessageInput} [params.draftMessage] - New draft message; pass null
 * to remove the draft
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatDraftMessageParams, OkUnion>>}
 */
export type setChatDraftMessage = (
  params?: SetChatDraftMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatDraftMessageParams, OkUnion>>
