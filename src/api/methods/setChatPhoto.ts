import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
 * Requires administrator rights in basic groups and the appropriate administrator rights
 * in supergroups and channels. The photo will not be changed before request to the
 * server has been completed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {InputFileInputUnion} [params.photo] - New chat photo. You can use a zero
 * InputFileId to delete the chat photo. Files that are accessible only by HTTP URL
 * are not acceptable
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetChatPhotoMethod = <ResponseT = OkUnion>(
  params: SetChatPhotoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetChatPhotoParams {
  /** Chat identifier */
  chatId?: number
  /**
   * New chat photo. You can use a zero InputFileId to delete the chat photo. Files that
   * are accessible only by HTTP URL are not acceptable
   */
  photo?: InputFileInputUnion
}
