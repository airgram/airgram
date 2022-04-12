import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FileUnion } from '../outputs'

export interface DownloadFileParams {
  fileId?: number // Identifier of the file to download
  priority?: number // Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first
  offset?: number // The starting position from which the file needs to be downloaded
  limit?: number // Number of bytes which need to be downloaded starting from the "offset" position before the download will automatically be canceled; use 0 to download without a limit
  synchronous?: boolean // Pass true to return response only after the file download has succeeded, has failed, has been canceled, or a new downloadFile request with different offset/limit parameters was sent; pass false to return file state immediately, just after the download has been started
}

/**
 * Downloads a file from the cloud. Download progress and completion of the download
 * will be notified through updateFile updates
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to download
 * @param {number} [params.priority] - Priority of the download (1-32). The higher
 * the priority, the earlier the file will be downloaded. If the priorities of two files
 * are equal, then the last one for which downloadFile/addFileToDownloads was called
 * will be downloaded first
 * @param {number} [params.offset] - The starting position from which the file needs
 * to be downloaded
 * @param {number} [params.limit] - Number of bytes which need to be downloaded starting
 * from the "offset" position before the download will automatically be canceled; use
 * 0 to download without a limit
 * @param {boolean} [params.synchronous] - Pass true to return response only after
 * the file download has succeeded, has failed, has been canceled, or a new downloadFile
 * request with different offset/limit parameters was sent; pass false to return file
 * state immediately, just after the download has been started
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DownloadFileParams, FileUnion>>}
 */
export type downloadFile = (
  params?: DownloadFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DownloadFileParams, FileUnion>>
