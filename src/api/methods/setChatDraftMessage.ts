import { DraftMessageInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes the draft message in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {DraftMessageInput} [params.draftMessage] - New draft message; may be null
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetChatDraftMessageMethod = <ResponseT = OkUnion>(
  params: SetChatDraftMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetChatDraftMessageParams {
  /** Chat identifier */
  chatId?: number
  /** New draft message; may be null */
  draftMessage?: DraftMessageInput
}
