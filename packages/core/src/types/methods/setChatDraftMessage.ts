import { ApiRequestOptions, ApiResponse } from '../airgram'
import { DraftMessageInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatDraftMessageParams {
  chatId?: number // Chat identifier
  draftMessage?: DraftMessageInput // New draft message; may be null
}

/**
 * Changes the draft message in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {DraftMessageInput} [params.draftMessage] - New draft message; may be null
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatDraftMessageParams, OkUnion>>}
 */
export type setChatDraftMessage<ExtensionT> = (
  params?: SetChatDraftMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatDraftMessageParams, OkUnion> & ExtensionT>
