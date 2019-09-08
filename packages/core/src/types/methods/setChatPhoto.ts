import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatPhotoParams {
  chatId?: number // Chat identifier
  photo?: InputFileInputUnion // New chat photo. You can use a zero InputFileId to delete the chat photo. Files that are accessible only by HTTP URL are not acceptable
}

/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
 * Requires can_change_info rights. The photo will not be changed before request to
 * the server has been completed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {InputFileInputUnion} [params.photo] - New chat photo. You can use a zero
 * InputFileId to delete the chat photo. Files that are accessible only by HTTP URL
 * are not acceptable
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatPhotoParams, OkUnion>>}
 */
export type setChatPhoto<ExtensionT> = (
  params?: SetChatPhotoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatPhotoParams, OkUnion> & ExtensionT>
