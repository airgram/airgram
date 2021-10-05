import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputChatPhotoInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatPhotoParams {
  chatId?: number // Chat identifier
  photo?: InputChatPhotoInputUnion // New chat photo; pass null to delete the chat photo
}

/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
 * Requires can_change_info administrator right
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {InputChatPhotoInputUnion} [params.photo] - New chat photo; pass null to
 * delete the chat photo
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatPhotoParams, OkUnion>>}
 */
export type setChatPhoto = (
  params?: SetChatPhotoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatPhotoParams, OkUnion>>
