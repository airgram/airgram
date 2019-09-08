import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetPinnedChatsParams {
  chatIds?: number[] // The new list of pinned chats
}

/**
 * Changes the order of pinned chats
 * @param {Object} params
 * @param {number[]} [params.chatIds] - The new list of pinned chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPinnedChatsParams, OkUnion>>}
 */
export type setPinnedChats<ExtensionT> = (
  params?: SetPinnedChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetPinnedChatsParams, OkUnion> & ExtensionT>
