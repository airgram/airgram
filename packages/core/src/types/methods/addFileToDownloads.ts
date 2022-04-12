import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FileUnion } from '../outputs'

export interface AddFileToDownloadsParams {
  fileId?: number // Identifier of the file to download
  chatId?: number // Chat identifier of the message with the file
  messageId?: number // Message identifier
  priority?: number // Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first
}

/**
 * Adds a file from a message to the list of file downloads. Download progress and completion
 * of the download will be notified through updateFile updates. If message database
 * is used, the list of file downloads is persistent across application restarts. The
 * downloading is independent from download using downloadFile, i.e. it continues if
 * downloadFile is canceled or is used to download a part of the file
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to download
 * @param {number} [params.chatId] - Chat identifier of the message with the file
 * @param {number} [params.messageId] - Message identifier
 * @param {number} [params.priority] - Priority of the download (1-32). The higher
 * the priority, the earlier the file will be downloaded. If the priorities of two files
 * are equal, then the last one for which downloadFile/addFileToDownloads was called
 * will be downloaded first
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddFileToDownloadsParams, FileUnion>>}
 */
export type addFileToDownloads = (
  params?: AddFileToDownloadsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddFileToDownloadsParams, FileUnion>>
