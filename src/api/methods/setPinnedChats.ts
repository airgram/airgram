import { OkUnion } from '../outputs'

/**
 * Changes the order of pinned chats
 * @param {Object} params
 * @param {number[]} [params.chatIds] - The new list of pinned chats
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetPinnedChatsMethod = <ResponseT = OkUnion>(
  params: SetPinnedChatsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetPinnedChatsParams {
  /** The new list of pinned chats */
  chatIds?: number[]
}
