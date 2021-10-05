import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetMessageImportConfirmationTextParams {
  chatId?: number // Identifier of a chat to which the messages will be imported. It must be an identifier of a private chat with a mutual contact or an identifier of a supergroup chat with can_change_info administrator right
}

/**
 * Returns a confirmation text to be shown to the user before starting message import
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of a chat to which the messages will
 * be imported. It must be an identifier of a private chat with a mutual contact or
 * an identifier of a supergroup chat with can_change_info administrator right
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageImportConfirmationTextParams, TextUnion>>}
 */
export type getMessageImportConfirmationText = (
  params?: GetMessageImportConfirmationTextParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageImportConfirmationTextParams, TextUnion>>
