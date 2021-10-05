import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ImportMessagesParams {
  chatId?: number // Identifier of a chat to which the messages will be imported. It must be an identifier of a private chat with a mutual contact or an identifier of a supergroup chat with can_change_info administrator right
  messageFile?: InputFileInputUnion // File with messages to import. Only inputFileLocal and inputFileGenerated are supported. The file must not be previously uploaded
  attachedFiles?: InputFileInputUnion[] // Files used in the imported messages. Only inputFileLocal and inputFileGenerated are supported. The files must not be previously uploaded
}

/**
 * Imports messages exported from another app
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of a chat to which the messages will
 * be imported. It must be an identifier of a private chat with a mutual contact or
 * an identifier of a supergroup chat with can_change_info administrator right
 * @param {InputFileInputUnion} [params.messageFile] - File with messages to import.
 * Only inputFileLocal and inputFileGenerated are supported. The file must not be previously
 * uploaded
 * @param {InputFileInputUnion[]} [params.attachedFiles] - Files used in the imported
 * messages. Only inputFileLocal and inputFileGenerated are supported. The files must
 * not be previously uploaded
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ImportMessagesParams, OkUnion>>}
 */
export type importMessages = (
  params?: ImportMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ImportMessagesParams, OkUnion>>
